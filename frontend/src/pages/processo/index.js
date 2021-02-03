import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CabecalhoForm from '../../components/CabecalhoForm';
import Tabela from '../../components/Tabela';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/UsuarioService';
import ModalExclusao from '../../components/ModalExclusao';

export default function Processo() {

  const history = useHistory();
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);  
  const [abrirModalExclusao, setAbrirModalExclusao] = useState(false);
  const {
    id, setId, carregar, setCarregar, alterar, excluir, texto, 
    setTexto, confirmaExcluir, setConfirmaExcluir
  } = useGeral();

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

  // Effect para carregar o modal de exclusão
  useEffect(() => {
    if (excluir && id > 0) {
      async function buscaDado() {
        const resposta = await service.obtem(`/processos/${id}`);
        if (resposta.data) {
          setTexto(`REG.: ${id} - ${resposta.data.assunto}`);
        }
        setAbrirModalExclusao(true);
      }
      buscaDado();
    }
  }, [id, excluir, setTexto])

  // Effect para exclusão do registro selecionado
  useEffect(() => {
    if (confirmaExcluir && id > 0) {
      setCarregando(true);
      async function excluiRegistro() {
        try {
          const resposta = await service.exclui(`/processos/${id}`);
          if (resposta.status === 204) {
            alert('Registro excluído com sucesso!');
            setId(-1);
            setConfirmaExcluir(false);
            setCarregar(true);
          }
        } catch (erro) {
          alert(erro);
          setCarregar(false);
          setCarregando(false);
          setConfirmaExcluir(false);
        }
      }
      excluiRegistro();
    }
  }, [id, setId, confirmaExcluir, setConfirmaExcluir, setCarregar])

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
        subtitulo="Listagem de todos os processos"
        linkPagina="/processos-form"
        tituloBotao="Adicionar"
      />
      <Tabela
        colunas={colunasTabela}
        dados={dados}
        carregando={carregando}
      />
      <ModalExclusao
        abrir={abrirModalExclusao}
        setAbrir={setAbrirModalExclusao}
        registro={texto}
        titulo="Tem certeza que quer excluir este registro?"
        subtitulo="Você não poderá desfazer esta operação."
      />      
    </div>
  )
}
