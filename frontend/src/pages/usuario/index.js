import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import CabecalhoForm from '../../components/CabecalhoForm';
import Tabela from '../../components/Tabela';
import { useGeral } from '../../contexts/GeralCtx';
import * as service from '../../services/UsuarioService';

export default function Usuario() {

  const history = useHistory();
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);  
  const {id, carregar, setCarregar, alterar} = useGeral();

  const colunasTabela = [
    { title: 'ID', field: 'id', width: 20 },
    { title: 'Perfil', field: 'perfil.tipo', width: 50 },
    { title: 'Nome', field: 'nome', width: 500 },
    { title: 'E-Mail', field: 'email', width: 1000 }
  ];

  // Effect para carregamento dos usuarios
  useEffect(() => {
    if (carregar) {
      setCarregando(true);
      service.obtem('/usuarios')
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
      history.push('/usuarios-form');
    }
  }, [alterar, history])

  return (
    <div>
      <CabecalhoForm
        titulo="Usuários"
        subtitulo="Listagem de todas os usuários"
        linkPagina="/usuarios-form"
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
