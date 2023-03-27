import { toast, ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';

function App() {
  return (
    <>
      <Home />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
