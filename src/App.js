import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Container, Title } from './styles/app';
import Form from './components/Form';
import Grid from './components/Grid';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { populateUserGrid } from './utils/populate';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    populateUserGrid(setUsers);
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>PACIENTES</Title>
        <Form />
        <Grid users={users} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
