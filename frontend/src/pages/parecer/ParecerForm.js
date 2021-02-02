import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import { ArrowBack, AssignmentTurnedIn } from '@material-ui/icons';
import { useGeral } from '../../contexts/GeralCtx';
import PageCss from '../pagesCss';


export default function ParecerForm() {

  const css = PageCss();
  const { alterar } = useGeral();

  return (
    <div>
      <CabecalhoForm
        titulo="Parecer"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/pareceres"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <Card variant="outlined">      
        <CardContent>
          <Card>
            <CardHeader
              avatar={<Avatar className={css.avatar}><AssignmentTurnedIn /></Avatar>}
              title="Parecer"
              subheader="Informe os dados do parecer"
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
