import React from 'react';

// importando provider
import { AutenticacaoProvider } from './contexts/AutenticacaoCtx';

// importando o layout e as páginas
import Rotas from './pages';

function App() {
  return (
    <AutenticacaoProvider>     
      <div>
        {
          <Rotas />
        }
      </div>
    </AutenticacaoProvider>
  );
}

export default App;
