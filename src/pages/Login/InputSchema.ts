import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  email: yup.string().email().required('O Email é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
});
