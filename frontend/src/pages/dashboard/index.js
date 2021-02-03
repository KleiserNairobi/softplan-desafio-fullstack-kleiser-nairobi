import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from '../../layout/styles'

export default function Dashboard() {
  const estilo = styles();

  return (
    <div>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <div>
        <div className={estilo.tituloPagina}>
          <Typography variant="h6">Dashboard</Typography>
        </div>
        <div className={estilo.subtituloPagina}>
          <Typography variant="caption">Indicadores do sistema</Typography>
        </div>
      </div>
      <div style={{ flex: 1 }} />
    </Grid>
    <Typography variant="caption">Esta seria uma página comum a todos os usuários</Typography>     
    </div>
  )
}
