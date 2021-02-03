import * as yup from 'yup';
const CAMPO_REQUERIDO = ' é obrigatório';

export default yup.object().shape({
  solicitante: yup.string()
    .max(50, 'Solicitante deve ter no máximo 50 caracteres')
    .required('Solicitante' + CAMPO_REQUERIDO),
  assunto: yup.string()
    .max(50, 'Assunto deve ter no máximo 50 caracteres')
    .required('Assunto' + CAMPO_REQUERIDO),
})