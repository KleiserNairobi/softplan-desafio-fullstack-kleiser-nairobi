import api from './apiBack';

export function obtem(url) {
  return api.get(url);
}

export function insere(url, objeto) {
  return api.post(url, objeto);
}

export function altera(url, objeto) {
  return api.put(url, objeto);
}

export function exclui(url) {
  return api.delete(url);
}