import React from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';


export default function Perfil() {
  return (
    <div>
      <CabecalhoForm
        titulo="Perfis"
        subtitulo="Listagem de todas os perfis"
        linkPagina="/perfis-form"
        tituloBotao="Adicionar"
      />
    </div>
  )
}
