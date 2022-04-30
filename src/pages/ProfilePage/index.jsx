import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { fieldActions } from '../../redux/actions';
import ProfileForm from '../../components/ProfileForm';
import { Container, StyledButton, ContainerSpinner } from './styled';
import CircularProgress from '@mui/material/CircularProgress';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fieldsGotResponse = useSelector(
    state => state.fieldsData.fieldsGotResponse,
  );

  const fieldsData = useSelector(state => state.fieldsData.fields);

  useEffect(() => {
    dispatch(fieldActions.getAllFields());
  }, [dispatch]);

  return (
    <Container>
      <StyledButton onClick={() => navigate('/configure')}  variant="contained">Go Back</StyledButton>
      {fieldsGotResponse && fieldsData.length > 0 && <ProfileForm data={fieldsData}/>}
      {!fieldsGotResponse && <ContainerSpinner><CircularProgress /></ContainerSpinner>}
      {fieldsGotResponse && fieldsData.length === 0 && <h3>No data to show</h3>}
    </Container>
  );
}
export default ProfilePage;