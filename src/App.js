import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Title } from './styles/app';
import Form from './components/Form';
import Grid from './components/Grid';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { populatePatientsGrid } from './utils/actions';
import { getPatients } from './utils/request';

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
      <GlobalStyle />
    </>
  );
}

export default App;
