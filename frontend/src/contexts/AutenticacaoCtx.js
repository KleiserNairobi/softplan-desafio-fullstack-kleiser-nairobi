import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as service from '../services/LoginService';

const AutenticacaoCtx = createContext();

export function AutenticacaoProvider({ children }) {
  
  const history = useHistory();
  const [carregando, setCarregando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);

  const [usuario, setUsuario] = useState({
    id: null,
    nome: null,
    perfil: null
  });

  useEffect(() => {
    if (usuario.nome !== null && usuario.perfil !== null) {
      setAutenticado(true);
    } else {
      setAutenticado(false);
    }
    setCarregando(false);
  }, [usuario]);

  async function handleLogin(email, senha) {
    await service.obtem(`/usuarios/login?email=${email}&senha=${senha}`)
    .then(resposta => {
      if (resposta.data !== null) {
        setUsuario({
          id: resposta.data.id,
          nome: resposta.data.nome,
          perfil: resposta.data.perfil.tipo
        });
        setAutenticado(true);
        setCarregando(true);
        history.push('/processos');  
      }
    })
    .catch(error => {
      setUsuario({
        id: null,
        nome: null,
        perfil: null
      })
      setAutenticado(false);
      setCarregando(false);  
    });
  }

  function handleLogout() {
    setUsuario({
      id: null,
      nome: null,
      perfil: null
    })
    setAutenticado(false);
    setCarregando(false);
    history.push('/login');
  }

  return (
    <AutenticacaoCtx.Provider
      value={{ 
        carregando, autenticado, setAutenticado, handleLogin, handleLogout,
        usuario
      }}
    >
      {children}
    </AutenticacaoCtx.Provider>
  );

}

export function useAutenticacao() {
  const context = useContext(AutenticacaoCtx);
  return context;
}