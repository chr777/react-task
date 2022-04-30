
import { useEffect, useState, useCallback} from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import CircularProgress from '@mui/material/CircularProgress';
import { fieldActions, spinnerActions } from '../../redux/actions';
import FieldsTable from '../../components/FieldsTable';
import { Container, ContainerBottom, StyledButton, Input, Form, StyledSelect, StyledSwitch, ContainerSpinner } from './styled';

const ConfigurePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fieldsGotResponse = useSelector(
    state => state.fieldsData.fieldsGotResponse,
  );

  const fieldsData = useSelector(state => state.fieldsData.fields);
  const spinning = useSelector(state => state.spinnerData.spinning);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [activeField, setActiveField] = useState(false);

  const [label, setLabel] = useState('');
  const [type, setType] = useState('');
  const [required, setRequired] = useState(false);
  const [visible, setVisible] = useState(true);
  const [rows, setRows] = useState('');


  const handleClose = () => {
    setOpenDelete(false);
    setOpenAdd(false);
    setOpenEdit(false);
    setActiveField(false);
    setLabel('');
    setType('');
    setRequired(false);
    setVisible(true);
    setRows(0);
  };

  useEffect(() => {
    dispatch(fieldActions.getAllFields());
  }, [dispatch]);

  
  const onRemoveField = useCallback((id) => {
    setOpenDelete(true);
    setActiveField(id);
  }, []);

  const onEditField = useCallback((id) => {
    setOpenEdit(true);
    setActiveField(id);
    const findActive =  fieldsData && fieldsData.filter(item => item.id === id)[0];
    setLabel(findActive.details.label);
    setType(findActive.type);
    setRequired(findActive.details.required);
    setVisible(findActive.details.visible);
    setRows(findActive.details.rows);
  }, [fieldsData]);

  const handleDeleteField = () => {
    dispatch(spinnerActions.setSpinning(true));
    dispatch(fieldActions.removefield(activeField));
    setOpenDelete(false);
  }
  const handlAddField = () => {
    if(type && label) {
      dispatch(spinnerActions.setSpinning(true));
      const data = {
        type,
        'details': {
          label,
          required,
          visible,
          'rows': rows ? rows : 1,
        }
      }
       dispatch(fieldActions.addField(data));
       setOpenAdd(false);
    }
  }

  const handlEditField = () => {
    if(type && label ) {
      dispatch(spinnerActions.setSpinning(true));
      const data = {
        type,
        'details': {
          label,
          required,
          visible,
          'rows': rows ? rows : 1,
        }
      }
       dispatch(fieldActions.changeField(activeField, data));
       setOpenEdit(false);
    }
  }

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'label':
        setLabel(event.target.value);
        break;
      case 'type':
        setType(event.target.value);
        break;
      case 'required':
        setRequired(event.target.checked);
        break;
      case 'visible':
        setVisible(event.target.checked);
        break;
      case 'rows':
        setRows(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <FieldsTable data={fieldsData} onRemoveField={onRemoveField} onEditField={onEditField}/>
      {fieldsGotResponse && fieldsData.length === 0 && <h1>No data to show</h1>}
      <ContainerBottom>
        <Button onClick={() => setOpenAdd(true)} variant="contained" >
          Add New Field
        </Button>
        <StyledButton onClick={() => navigate('/profile')} variant="contained" >
            Go to Profile
        </StyledButton>
      </ContainerBottom>
      
      <Dialog
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Are you sure you want to delete this field?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteField} autoFocus color='error'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openAdd}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Add new field
        </DialogTitle>
        <DialogContent>

          <Form type ="submit">
          <Input required type={'text'} label='Label' variant='filled' size='small' name='label' value={label} onChange={handleChange}/>
          <FormControl required variant="filled">
            <InputLabel>Type</InputLabel>
            <StyledSelect type={'text'} label='Type' variant='filled' size='small' name='type' value={type} onChange={handleChange}> 
              <MenuItem value={'LINK'}>Link</MenuItem>
              <MenuItem value={'NAME'}>Name</MenuItem>
              <MenuItem value={'TEXT'}>Text</MenuItem>
            </StyledSelect>
          </FormControl>
          <StyledSwitch control={<Switch name='required' checked={required} onChange={handleChange}  />} label="Required" />
          <StyledSwitch control={<Switch name='visible' checked={visible} onChange={handleChange}/>} label="Visible" />

          {type === 'TEXT' && <Input type={'number'} name='rows' value={rows} onChange={handleChange}  label='Rows' variant='filled' size='small'/>}
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handlAddField} autoFocus>
             Ok
          </Button>
          </Form>
        </DialogContent>

      </Dialog>
      <Dialog
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Edit field
        </DialogTitle>
        <DialogContent>
        <Form type="submit">
          <Input required type={'text'} label='Label' variant='filled' size='small' name='label' value={label} onChange={handleChange}/>
          <FormControl variant="filled">
            <InputLabel>Type</InputLabel>
            <StyledSelect required type={'text'} label='Type' variant='filled' size='small' name='type' value={type} onChange={handleChange}> 
              <MenuItem value={'LINK'}>Link</MenuItem>
              <MenuItem value={'NAME'}>Name</MenuItem>
              <MenuItem value={'TEXT'}>Text</MenuItem>
            </StyledSelect>
          </FormControl>
          <StyledSwitch control={<Switch name='required' checked={required} onChange={handleChange}  />} label="Required" />
          <StyledSwitch control={<Switch name='visible' checked={visible} onChange={handleChange}/>} label="Visible" />

          {type === 'TEXT' && <Input type={'number'} name='rows' value={rows} onChange={handleChange}  label='Rows' variant='filled' size='small'/>}
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlEditField} type="submit" autoFocus>
            Ok
          </Button>
          </Form>
        </DialogContent>
      
      </Dialog>
      {spinning && <ContainerSpinner>  <CircularProgress /> </ContainerSpinner>}
      {!fieldsGotResponse && <ContainerSpinner>  <CircularProgress /> </ContainerSpinner>}
    </Container>
  );
}
export default ConfigurePage;