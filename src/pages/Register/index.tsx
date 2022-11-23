/* eslint-disable prettier/prettier */
/* eslint-disable react/no-children-prop */

import {
  Button,
  Flex,
  FormControl,
  Image,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Toast,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore/lite';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillKeyFill, BsPersonSquare } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import logoFeridometro from '../../assets/logoFeridometro.png';
import { Header } from '../../Components/Header';
import { auth, userCollectionRef } from '../../firebase-config';
import { theme, themeFonts } from '../../styles/global';
import { registerInputsSchema } from './registerSchema';
import { Container } from './styles';

interface RegisterInputs {
  name: string;
  instituition: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export function RegisterPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerInputsSchema),
    mode: 'onBlur',
  });

  const handleSubmitRegister: SubmitHandler<RegisterInputs> = async (data) => {
    if (data.password !== data.passwordRepeat) {
      setError('password', { message: 'As senhas devem ser iguais' });
      setError('passwordRepeat', { message: 'As senhas devem ser iguais' });

      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await addDoc(userCollectionRef, {
        name: data.name,
        email: data.email,
        instituition: data.instituition,
        password: data.password,
      });

      toast({
        title: 'Sucesso',
        description: 'Usuário Criado com sucesso.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      reset();
      toast({
        title: 'Algo deu errado.',
        description: String(error),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container>
      <Flex flexDirection="column" justifyContent="space-between" minHeight="100vh">
        <div className="boxContainer">
          <div>
            <Header redirectLink="/" areaName="Criar Conta" />
            <Flex justifyContent="center" flex="1">
              <Image src={logoFeridometro} height={['140px', '160px', '250px']} />
            </Flex>
          </div>
        </div>

        <Stack
          flex="10"
          spacing="4rem"
          bgColor="white"
          height="100%"
          mt="1.2rem"
          borderTopRadius={themeFonts.borderRadius.xLarge}
          padding="1.4rem"
          className="stack-ontainer"
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
                    type="password"
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
                    type="password"
                    {...register('passwordRepeat')}
                    placeholder="Digite sua senha"
                    fontSize={themeFonts.fontSizes.smLarge}
                    borderRadius={themeFonts.borderRadius.medium}
                    isInvalid={!!errors.passwordRepeat}
                  />
                </InputGroup>

                <Text color="red">
                  {!!errors.passwordRepeat && !!errors.password
                    ? errors.password.message
                    : null}
                </Text>

                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  flexDirection="column"
                  height="5rem"
                >
                  <Button
                    type="submit"
                    bgColor={theme.colors.blue_600}
                    color="white"
                    width="15rem"
                    isLoading={isSubmitting}
                  >
                    Entrar
                  </Button>

                  <Button
                    onClick={() => navigate('/')}
                    className="back-button"
                    width="10rem"
                    variant="link"
                  >
                    Voltar para login
                  </Button>
                </Flex>
              </Stack>
            </FormControl>
          </form>
        </Stack>
      </Flex>
    </Container>
  );
}
