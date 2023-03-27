import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Form from './Form';
import Grid from './Grid';

import { populatePatientsGrid } from '../utils/actions';
import { getPatients } from '../utils/request';
import { Container, Title } from '../styles/patient';

function App() {
  const [patients, setPatients] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    populatePatientsGrid(setPatients);
  }, [setPatients]);

  return (
    <>
      <Container>
        <Title>PACIENTES</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getPatients={getPatients} />
        <Grid setOnEdit={setOnEdit} patients={patients} setPatients={setPatients} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App;
