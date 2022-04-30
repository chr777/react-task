import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import Row from '../Row';
import Cell from '../Cell';

import { Container } from './styled';

const FieldsTable =  ({ data, onRemoveField, onEditField }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newRows = data && data.map(item => {return { label: item.details.label, type: item.type, id: item.id }});
    setRows(newRows);
  }, [data]);

  return ( 
    <Container>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <Row>
            <Cell>Label</Cell>
            <Cell align="right">Type</Cell>
            <Cell align="right">Actions</Cell>
          </Row>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id}>
              <Cell component="th" scope="row">
                {row.label}
              </Cell>
              <Cell align="right">{row.type}</Cell>
              <Cell align="right">
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => onEditField(row.id)}>Edit</Button>
                <Button onClick={() => onRemoveField(row.id)}>Delete</Button>
              </ButtonGroup>
              </Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
export default FieldsTable;