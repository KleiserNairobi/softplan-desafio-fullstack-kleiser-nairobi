import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';

export default function Parecer() {
  return (
    <div>
      <CabecalhoForm
        titulo="Pareceres"
        subtitulo="Listagem de todas os pareceres"
        linkPagina="/pareceres-form"
        tituloBotao="Adicionar"
      />
    </div>
  )
}