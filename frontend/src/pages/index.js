import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import de página pública
import Login from './login';

// import de páginas privadas
import Perfil from './perfil';
import Usuario from './usuario';
import Processo from './processo';
import Parecer from './parecer';

function Rotas() {  
  return (
    <Switch>
      <Route exact path="/" component={Processo} />
      <Route path="/login" component={Login} /> 
      <Route path="/perfis" component={Perfil} />
      <Route path="/usuarios" component={Usuario} />
      <Route path="/processos" component={Processo} />
      <Route path="/pareceres" component={Parecer} />
    </Switch>
  )
}

export default Rotas;