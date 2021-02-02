import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CabecalhoForm from '../../components/CabecalhoForm';
import Tabela from '../../components/Tabela';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/PerfilService';


export default function Perfil() {

  const history = useHistory();
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);  
  const {id, carregar, setCarregar, alterar} = useGeral();

  const colunasTabela = [
    { title: 'ID', field: 'id', width: 20 },
    { title: 'Tipo Perfil', field: 'tipo', width: 50 },
    { title: 'Descrição', field: 'descricao', width: 1000 }
  ];

  // Effect para carregamento dos perfis
  useEffect(() => {
    if (carregar) {
      setCarregando(true);
      service.obtem('/perfis')
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

  // Effect para carregar a tela de cadastro
  useEffect(() => {
    if (alterar) {
      history.push('/perfis-form');
    }
  }, [alterar, history])

  return (
    <div>
      <CabecalhoForm
        titulo="Perfis"
        subtitulo="Listagem de todas os perfis"
        linkPagina="/perfis-form"
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
