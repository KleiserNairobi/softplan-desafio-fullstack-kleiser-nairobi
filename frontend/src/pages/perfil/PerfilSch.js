import * as yup from 'yup';
const CAMPO_REQUERIDO = ' é obrigatório';

export default yup.object().shape({
  tipo: yup.string()
    .required('O campo tipo' + CAMPO_REQUERIDO),
  descricao: yup.string()
    .max(50, 'O campo descrição deve ter no máximo 60 caracteres')
    .required('O campo descrição' + CAMPO_REQUERIDO),
})