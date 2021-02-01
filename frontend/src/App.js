import React from 'react';
import { useLocation } from 'react-router-dom';

// importando provider
import { AutenticacaoProvider } from './contexts/AutenticacaoCtx';

// importando o layout e as páginas
import Rotas from './pages';
import Layout from './layout';

function App() {
  let location = useLocation(); 
  return (
    <AutenticacaoProvider>     
      <div>
        {
          location.pathname === '/login'
          ? <Rotas />
          : <Layout><Rotas /></Layout>
        }
      </div>
    </AutenticacaoProvider>
  );
}

export default App;
