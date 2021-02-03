import * as yup from 'yup';
const CAMPO_REQUERIDO = ' é obrigatório';

export default yup.object().shape({
  processo: yup.object().shape({
    id: yup.number()
      .typeError('Processo deve ser um número')
      .required('Processo' + CAMPO_REQUERIDO)
  }),  
  parecer: yup.string()
    .max(256, 'Parecer deve ter no máximo 256 caracteres')
    .required('Parecer' + CAMPO_REQUERIDO),
})