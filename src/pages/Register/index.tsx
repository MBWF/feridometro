/* eslint-disable prettier/prettier */
/* eslint-disable react/no-children-prop */
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore/lite';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillKeyFill, BsPersonSquare } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import logoFeridometro from '../../assets/logoFeridometro.png';
import { ButtonRedirect } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { auth, userCollectionRef } from '../../firebase-config';
import { theme, themeFonts } from '../../styles/global';
import { registerInputsSchema } from './registerSchema';

interface RegisterInputs {
  name: string;
  instituition: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerInputsSchema),
    mode: 'onBlur',
  });

  const handleSubmitRegister: SubmitHandler<RegisterInputs> = async (data) => {
    if (data.password !== data.passwordRepeat) {
      setError('password', { message: 'As senhas devem ser iguais' });
      setError('passwordRepeat', { message: 'As senhas devem ser iguaisse' });

      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await addDoc(userCollectionRef, {
        name: data.name, email: data.email, instituition: data.instituition, password: data.password,  
      }) 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="768px"
        bgColor="blue.200"
        minHeight="100vh"
      >
        <Header redirectLink="/" areaName="Criar Conta" />
        <Flex justifyContent="center" flex="1">
          <Image src={logoFeridometro} height="120px" />
        </Flex>

        <Stack
          flex="10"
          spacing="4rem"
          bgColor="white"
          width="100%"
          height="100%"
          mt="1.2rem"
          borderTopRadius={themeFonts.borderRadius.xLarge}
          padding="1.4rem"
        >
          <form onSubmit={handleSubmit(handleSubmitRegister)}>
            <FormControl isDisabled={isSubmitting}>
              <Stack spacing="1rem">
                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none" children={<BsPersonSquare />} />
                  <ChakraInput
                    {...register('name')}
                    placeholder="Digite seu nome"
                    fontSize={themeFonts.fontSizes.smLarge}
                    borderRadius={themeFonts.borderRadius.medium}
                    isInvalid={!!errors.name}
                  />
                </InputGroup>

                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none" children={<FaGraduationCap />} />
                  <ChakraInput
                    {...register('instituition')}
                    placeholder="Digite sua instituição"
                    fontSize={themeFonts.fontSizes.smLarge}
                    borderRadius={themeFonts.borderRadius.medium}
                    isInvalid={!!errors.instituition}
                  />
                </InputGroup>

                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none" children={<MdEmail />} />
                  <ChakraInput
                    {...register('email')}
                    placeholder="Digite seu Email"
                    fontSize={themeFonts.fontSizes.smLarge}
                    borderRadius={themeFonts.borderRadius.medium}
                    isInvalid={!!errors.email}
                  />
                </InputGroup>

                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none" children={<BsFillKeyFill />} />
                  <ChakraInput
                    {...register('password')}
                    placeholder="Digite sua senha"
                    fontSize={themeFonts.fontSizes.smLarge}
                    borderRadius={themeFonts.borderRadius.medium}
                    isInvalid={!!errors.password}
                  />
                </InputGroup>

                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none" children={<BsFillKeyFill />} />
                  <ChakraInput
                    {...register('passwordRepeat')}
                    placeholder="Digite sua senha"
                    fontSize={themeFonts.fontSizes.smLarge}
                    borderRadius={themeFonts.borderRadius.medium}
                    isInvalid={!!errors.passwordRepeat}
                  />
                </InputGroup>

                <Text color="red">
                  {(!!errors.passwordRepeat && !!errors.password)
                    ? errors.password.message
                    : null}
                </Text>

                <Flex justifyContent="center">
                  <Button
                    type="submit"
                    bgColor={theme.colors.blue_600}
                    color="white"
                    width="15rem"
                    isLoading={isSubmitting}
                  >
                    Entrar
                  </Button>
                </Flex>
              </Stack>
            </FormControl>
          </form>
        </Stack>
      </Flex>
    </>
  );
}
