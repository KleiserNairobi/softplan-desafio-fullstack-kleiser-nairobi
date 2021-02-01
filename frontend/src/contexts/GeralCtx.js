import React, { createContext, useState, useContext } from 'react';

const GeralCtx = createContext();

export function GeralProvider({ children }) {

  const [id, setId] = useState(-1);
  const [alterar, setAlterar] = useState(false);
  const [excluir, setExcluir] = useState(false);
  const [carregar, setCarregar] = useState(true);

  return (
    <GeralCtx.Provider
      value={{ 
        id, setId, alterar, setAlterar, excluir, setExcluir, 
        carregar, setCarregar 
      }}
    >
      {children}
    </GeralCtx.Provider>
  );
}

export function useGeral() {
  const context = useContext(GeralCtx);
  return context;
}