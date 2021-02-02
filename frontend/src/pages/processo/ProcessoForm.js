import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import { ArrowBack, Assignment } from '@material-ui/icons';
import { useGeral } from '../../contexts/GeralCtx';
import PageCss from '../pagesCss';


export default function ProcessoForm() {

  const css = PageCss();
  const { alterar } = useGeral();

  return (
    <div>
      <CabecalhoForm
        titulo="Processo"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/processos"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <Card variant="outlined">      
        <CardContent>
          <Card>
            <CardHeader
              avatar={<Avatar className={css.avatar}><Assignment /></Avatar>}
              title="Processo"
              subheader="Informe os dados do processo"
              className={css.cartaoTitulo}
            />
            <CardContent>
              ...
            </CardContent>
          </Card>        
        </CardContent>  
      </Card>

    </div>
  )
}