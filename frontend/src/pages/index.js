import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useAutenticacao } from '../contexts/AutenticacaoCtx';

// import de página pública
import Login from './login';

// import de páginas privadas
import Perfil from './perfil';
import Usuario from './usuario';
import Processo from './processo';
import Parecer from './parecer';

function Rotas() { 
  function PrivateRoute({ component: Component, ...rest }) {  
    const { autenticado } = useAutenticacao();        
    return (
      <Route
        {...rest}
        render={props => (
          autenticado ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        )} 
      />
    )
  }  
  
  return (
    <Switch>
      <Route path="/login" component={Login} /> 
      <PrivateRoute exact path="/" component={Processo} />
      <PrivateRoute path="/perfis" component={Perfil} />
      <PrivateRoute path="/usuarios" component={Usuario} />
      <PrivateRoute path="/processos" component={Processo} />
      <PrivateRoute path="/pareceres" component={Parecer} />
    </Switch>
  )
}

export default Rotas;