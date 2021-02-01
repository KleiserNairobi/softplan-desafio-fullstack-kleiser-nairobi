import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import Theme from './theme';
import Cabecalho from './Cabecalho';

export default function Layout() {
  return (
    <ThemeProvider theme={Theme}>
    <div>
      <CssBaseline/>
      <Cabecalho/>
    </div>
    </ThemeProvider>
  )
}
