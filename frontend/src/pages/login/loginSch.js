import * as yup from 'yup';
const CAMPO_REQUERIDO = ' é obrigatório';

export default yup.object().shape({
  email: yup.string()
    .required('Campo e-mail' + CAMPO_REQUERIDO)  
    .email('Informe um e-mail válido'),
  senha: yup.string()    
    .required('Campo senha' + CAMPO_REQUERIDO),
})