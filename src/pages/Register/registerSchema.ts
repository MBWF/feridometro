import * as yup from 'yup';

export const registerInputsSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório.'),
  instituition: yup.string().required('Instituição é obrigatória.'),
  email: yup.string().email().required('O Email é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
  passwordRepeat: yup.string().required('A senha é obrigatória.'),
});
