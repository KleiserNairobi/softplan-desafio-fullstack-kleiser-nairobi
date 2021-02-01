import React from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton, Avatar, Typography, Tooltip } from '@material-ui/core';
import { ExitToApp, Person } from '@material-ui/icons';
import { useAutenticacao } from '../../contexts/AutenticacaoCtx';

import BarraMenu from '../Menu';
import styles from '../styles';

export default function Cabecalho() {
  
  const estilo = styles();
  const { usuario, handleLogout } = useAutenticacao();

  function sairSistema() {
    handleLogout();
  }

  return (
    <div className={estilo.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={estilo.appBar}
      >
        <Toolbar>
          <div className={estilo.dadosUsuario}>
            <div className={estilo.margemAvatar}>
              <Avatar alt="usuario">
                <Person />
              </Avatar>
            </div>
            <Typography variant="subtitle1">{usuario.nome}</Typography>
          </div>
          <div style={{ flex: 1 }} />
          <Tooltip title="Sair do sistema" placement="bottom" arrow>
            <IconButton color="inherit" onClick={() => sairSistema()}>
              <ExitToApp />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <BarraMenu/>
      </AppBar>
    </div>
  )
}
