import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';

export default function Usuario() {
  return (
    <div>
      <CabecalhoForm
        titulo="Usuários"
        subtitulo="Listagem de todas os usuários"
        linkPagina="/usuarios-form"
        tituloBotao="Adicionar"
      />
    </div>
  )
}
