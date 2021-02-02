import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import { ArrowBack, PermContactCalendar } from '@material-ui/icons';
import { useGeral } from '../../contexts/GeralCtx';
import PageCss from '../pagesCss';


export default function PerfilForm() {

  const css = PageCss();
  const { alterar } = useGeral();

  return (
    <div>
      <CabecalhoForm
        titulo="Perfil"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/perfis"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <Card variant="outlined">      
        <CardContent>
          <Card>
            <CardHeader
              avatar={<Avatar className={css.avatar}><PermContactCalendar /></Avatar>}
              title="Perfil"
              subheader="Informe os dados do perfil"
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