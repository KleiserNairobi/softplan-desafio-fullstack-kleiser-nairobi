import React from 'react';
import { useLocation } from 'react-router-dom';

// importando provider
import { AutenticacaoProvider } from './contexts/AutenticacaoCtx';
import { GeralProvider } from './contexts/GeralCtx';

// importando o layout e as páginas
import Rotas from './pages';
import Layout from './layout';

function App() {
  let location = useLocation(); 
  return (
    <AutenticacaoProvider>
      <GeralProvider>
        <div>
          {
            location.pathname === '/login'
            ? <Rotas />
            : <Layout><Rotas /></Layout>
          }
        </div>
      </GeralProvider>
    </AutenticacaoProvider>
  );
}

export default App;
