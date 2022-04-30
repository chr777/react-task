import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const StyledButton = styled(Button)`
  width: 120px !important;
  background-color: black !important;
`;

export const ContainerSpinner = styled.div`
  position: relative;
  left: 50%;
  top: 50%; 
`;