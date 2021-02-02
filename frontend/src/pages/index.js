import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useAutenticacao } from '../contexts/AutenticacaoCtx';

// import de página pública
import Login from './login';

// import de páginas privadas
import Perfil from './perfil';
import PerfilForm from './perfil/PerfilForm';
import Usuario from './usuario';
import UsuarioForm from './usuario/UsuarioForm';
import Processo from './processo';
import ProcessoForm from './processo/ProcessoForm';
import Parecer from './parecer';
import ParecerForm from './parecer/ParecerForm';

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
      <PrivateRoute path="/perfis-form" component={PerfilForm} />
      <PrivateRoute path="/usuarios" component={Usuario} />
      <PrivateRoute path="/usuarios-form" component={UsuarioForm} />
      <PrivateRoute path="/processos" component={Processo} />
      <PrivateRoute path="/processos-form" component={ProcessoForm} />
      <PrivateRoute path="/pareceres" component={Parecer} />
      <PrivateRoute path="/pareceres-form" component={ParecerForm} />
    </Switch>
  )
}

export default Rotas;