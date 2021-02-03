import * as yup from 'yup';
const CAMPO_REQUERIDO = ' é obrigatório';

export default yup.object().shape({
  perfil: yup.object().shape({
    id: yup.number()
      .typeError('Perfil deve ser um número')
      .required('Perfil' + CAMPO_REQUERIDO)
  }),
  nome: yup.string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(60, 'Nome deve ter no máximo 60 caracteres')
    .required('Nome' + CAMPO_REQUERIDO),
  email: yup.string()
    .email('Informe um e-mail válido'),
  senha: yup.string()
   .max(256, 'Senha deve ter no máximo 256 caracteres')
   .required('Senha' + CAMPO_REQUERIDO),
  confirmeSenha: yup.string()
   .max(256, 'Senha deve ter no máximo 256 caracteres')
   .oneOf([yup.ref('senha'), null], 'As senhas são diferentes')
})