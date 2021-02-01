import React from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton, Avatar, Typography, Tooltip } from '@material-ui/core';
import { ExitToApp, Person } from '@material-ui/icons';
import { useAutenticacao } from '../../contexts/AutenticacaoCtx';

import BarraMenu from '../Menu';

export default function Cabecalho() {
  
  const { handleLogout } = useAutenticacao();

  function sairSistema() {
    handleLogout();
  }

  return (
    <div>
      <CssBaseline/>
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <div>
            <div>
              <Avatar alt="usuario">
                <Person />
              </Avatar>
            </div>
            <Typography variant="subtitle1">Nome Usuário</Typography>
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
