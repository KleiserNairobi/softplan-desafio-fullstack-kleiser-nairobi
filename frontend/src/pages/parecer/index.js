import React, {useEffect, useState} from 'react';
import CabecalhoForm from '../../components/CabecalhoForm';
import Tabela from '../../components/Tabela';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/ParecerService';


export default function Parecer() {

  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);  
  const {id, carregar, setCarregar} = useGeral();

  const colunasTabela = [
    { title: 'ID', field: 'id', width: 20 },
    { title: 'Processo', field: 'processo.id', width: 30 },
    { title: 'Parecer', field: 'parecer', width: 300 },
    { title: 'Data', field: 'data', width: 50 },
    { title: 'Hora', field: 'hora', width: 50 },
    { title: 'Usuário', field: 'usuario.id', width: 100 },
  ];

  // Effect para carregamento dos pareceres
  useEffect(() => {
    if (carregar) {
      setCarregando(true);
      service.obtem('/pareceres')
      .then(response => {
        setDados(response.data);
        setCarregando(false);
      })
      .catch(error => {
        console.log(error);
      })
      setCarregar(false);
    }
  }, [id, carregar, setCarregar])

  return (
    <div>
      <CabecalhoForm
        titulo="Pareceres"
        subtitulo="Listagem de todas os pareceres"
        linkPagina="/pareceres-form"
        tituloBotao="Adicionar"
      />
      <Tabela
        colunas={colunasTabela}
        dados={dados}
        carregando={carregando}
      />      
    </div>
  )
}