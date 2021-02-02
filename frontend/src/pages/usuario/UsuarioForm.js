import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import { ArrowBack, Person } from '@material-ui/icons';
import { useGeral } from '../../contexts/GeralCtx';
import PageCss from '../pagesCss';


export default function UsuarioForm() {

  const css = PageCss();
  const { alterar } = useGeral();

  return (
    <div>
      <CabecalhoForm
        titulo="Usuário"
        subtitulo={alterar ? "Edição de novo registro" : "Adição de novo registro"}  
        linkPagina="/usuarios"
        icone={<ArrowBack />}
        tituloBotao="Retornar"
      />
      <Card variant="outlined">      
        <CardContent>
          <Card>
            <CardHeader
              avatar={<Avatar className={css.avatar}><Person /></Avatar>}
              title="Usuário"
              subheader="Informe os dados do usuário"
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