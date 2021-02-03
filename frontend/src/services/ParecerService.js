import api from './apiBack';
import {format } from "date-fns";

export function obtem(url) {
  return api.get(url);
}

export function insere(url, objeto, idUsuario) {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
  var minuto = dataAtual.getMinutes();
  var segundo = dataAtual.getSeconds();

  dataAtual = format(dataAtual , 'yyyy-MM-dd');
  var horaAtual = hora + ':' + minuto + ':' + segundo;

  let jsonData = {
    processo: {id: objeto.processo.id},
    usuario: {id: idUsuario},
    parecer: objeto.parecer,
    data: dataAtual,
    hora: horaAtual
  }

  return api.post(url, jsonData);
}

export function altera(url, objeto, idUsuario) {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
  var minuto = dataAtual.getMinutes();
  var segundo = dataAtual.getSeconds();

  dataAtual = format(dataAtual , 'yyyy-MM-dd');
  var horaAtual = hora + ':' + minuto + ':' + segundo;

  let jsonData = {
    processo: {id: objeto.processo.id},
    usuario: {id: idUsuario},
    parecer: objeto.parecer,
    data: dataAtual,
    hora: horaAtual
  }

  return api.put(url, jsonData);
}

export function exclui(url) {
  return api.delete(url);
}