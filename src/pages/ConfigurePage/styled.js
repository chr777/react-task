import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  h1 {
      margin: 0 auto;
  }
`;

export const ContainerBottom = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: 24px;
  justify-conent: flex-start;
`;

export const StyledButton = styled(Button)`
  margin-left: 24px !important;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const Input = styled(TextField)`
  margin-bottom: 12px !important;
`;

export const StyledSelect = styled(Select)`
  margin-bottom: 12px !important;
`;

export const StyledSwitch = styled(FormControlLabel)`
  margin-bottom: 12px !important;
`;

export const ContainerSpinner = styled.div`
  position: relative;
  left: 50%;
  top: 50%; 
`;