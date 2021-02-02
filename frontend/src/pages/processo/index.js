import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CabecalhoForm from '../../components/CabecalhoForm';
import Tabela from '../../components/Tabela';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/UsuarioService';

export default function Processo() {

  const history = useHistory();
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);  
  const {id, carregar, setCarregar, alterar} = useGeral();

  const colunasTabela = [
    { title: 'ID', field: 'id', width: 20 },
    { title: 'Solicitante', field: 'solicitante', width: 250 },
    { title: 'Assunto', field: 'assunto', width: 250 },
    { title: 'Data Abertura', field: 'dataAbertura', width: 50 },
    { title: 'Hora Abertura', field: 'horaAbertura', width: 50 },
    { title: 'Usuário', field: 'usuario.id', width: 100 }
  ];

  // Effect para carregamento dos processos
  useEffect(() => {
    if (carregar) {
      setCarregando(true);
      service.obtem('/processos')
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
      history.push('/processos-form');
    }
  }, [alterar, history])

  return (
    <div>
      <CabecalhoForm
        titulo="Processos"
        subtitulo="Listagem de todas os processos"
        linkPagina="/processos-form"
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
