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
      <Route exact path="/" component={Processo} />
      <Route path="/perfis" component={Perfil} />
      <Route path="/perfis-form" component={PerfilForm} />
      <Route path="/usuarios" component={Usuario} />
      <Route path="/usuarios-form" component={UsuarioForm} />
      <Route path="/processos" component={Processo} />
      <Route path="/processos-form" component={ProcessoForm} />
      <Route path="/pareceres" component={Parecer} />
      <Route path="/pareceres-form" component={ParecerForm} />
    </Switch>
  )
}

export default Rotas;