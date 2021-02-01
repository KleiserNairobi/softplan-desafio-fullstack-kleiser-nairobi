import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';


export default function Processo() {
  return (
    <div>
      <CabecalhoForm
        titulo="Processos"
        subtitulo="Listagem de todas os processos"
        linkPagina="/processos-form"
        tituloBotao="Adicionar"
      />
    </div>
  )
}
