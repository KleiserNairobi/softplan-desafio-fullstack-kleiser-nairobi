import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import Theme from './theme';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';

export default function Layout({children}) {
  return (
    <ThemeProvider theme={Theme}>
    <div>
      <CssBaseline/>
      <Cabecalho/>
      <Conteudo>{children}</Conteudo>
    </div>
    </ThemeProvider>
  )
}
