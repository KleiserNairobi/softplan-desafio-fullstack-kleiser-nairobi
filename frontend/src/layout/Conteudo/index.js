import React from 'react';
import styles from '../styles';

export default function Conteudo({ children }) { 
  const estilo = styles(); 
  return (
    <main className={estilo.conteudo}>
      {children}
    </main>
  );
}