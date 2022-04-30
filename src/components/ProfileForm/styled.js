import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-conent: flex-start;
`;

export const Input = styled(TextField)`
  margin-bottom: 12px !important;
`;
export const Textarea = styled(TextareaAutosize)`
  margin-bottom: 12px !important;
  background-color: rgba(0, 0, 0, 0.06) !important;
  border-top-left-radius: 4px !important;
  border-top-right-radius: 4px !important;
  font-size: 17px !important;
`;


export const ContainerBottom = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: 24px;
  justify-conent: flex-start;
`;

export const StyledButton = styled(Button)`
  width: 100px;
`;
