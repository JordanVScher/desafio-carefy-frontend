import { useEffect, useState } from 'react';
import { AuthUrl } from '../config/github';
import { Button, Container } from '../styles/home';
import getQueryVariable from '../utils/getQueryVariable';
import { getAccessToken } from '../utils/request';
import Patient from './Patient';

function Home() {
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    const codeParam = urlParams.get('code');

    if (codeParam && localStorage.getItem('accessToken') === null) {
      getAccessToken(codeParam).then((data) => {
        const tokenParam = getQueryVariable(data, 'access_token');
        if (tokenParam) {
          localStorage.setItem('accessToken', tokenParam);
          setRerender(!rerender);
        }
      });
    }
  }, []);

  function loginWithGithub() {
    window.location.assign(AuthUrl);
  }

  function logout() {
    localStorage.removeItem('accessToken');
    setRerender(!rerender);
  }

  return (
    <Container>
      <div className="App">
        <header className="App-header">
          {localStorage.getItem('accessToken')
            ? (
              <div className="Logged">
                <Patient />
                <Button type="button" onClick={() => { logout(); }}>Log Out</Button>
              </div>
            )
            : (
              <div className="NotLogged">
                <h3>Usuário deverá logar</h3>
                <Button type="button" onClick={loginWithGithub}>Login with Github </Button>
              </div>
            )}
        </header>
      </div>
    </Container>

  );
}

export default Home;
