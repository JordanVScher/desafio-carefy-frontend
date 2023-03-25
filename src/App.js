import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Title } from './styles/app';
import Form from './components/Form';
import Grid from './components/Grid';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { populatePatientsGrid } from './utils/populate';

function App() {
  const [patients, setPatients] = useState([]);
  const [onEdit, setOnEdit] = useState(null); // eslint-disable-line

  useEffect(() => {
    populatePatientsGrid(setPatients);
  }, [setPatients]);

  return (
    <>
      <Container>
        <Title>PACIENTES</Title>
        <Form />
        <Grid patients={patients} setOnEdit={setOnEdit} setPatients={setPatients} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
