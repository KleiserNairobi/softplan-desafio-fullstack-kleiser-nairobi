import * as yup from 'yup';
const CAMPO_REQUERIDO = ' é obrigatório';

export default yup.object().shape({
  perfil: yup.object().shape({
    id: yup.number()
      .typeError('Perfil deve ser um número')
      .required('Perfil' + CAMPO_REQUERIDO)
  }),
  nome: yup.string()
    .max(50, 'Nome deve ter no máximo 50 caracteres')
    .required('Nome' + CAMPO_REQUERIDO),
  email: yup.string()
    .email('Informe um e-mail válido')
    .required('Email' + CAMPO_REQUERIDO),
  senha: yup.string()
   .max(256, 'Senha deve ter no máximo 256 caracteres')
   .required('Senha' + CAMPO_REQUERIDO),
  confirmeSenha: yup.string()
   .max(256, 'Senha deve ter no máximo 256 caracteres')
   .oneOf([yup.ref('senha'), null], 'As senhas são diferentes')
})