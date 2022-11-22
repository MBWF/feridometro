/* eslint-disable react/no-children-prop */
import './styles.css';

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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import logoFeridometro from '../../assets/logoFeridometro.png';
import { auth } from '../../firebase-config';
import { theme, themeFonts } from '../../styles/global';
import { inputSchema } from './InputSchema';

type LoginInputs = {
  email: string;
  password: string;
};

export function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: yupResolver(inputSchema),
  });

  const handleSubmitLogin: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(auth, data.email, data.password);

      if (user) {
        navigate('/home');
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mobileScreen">
        <Flex
          margin="0 auto"
          flexDirection="column"
          alignItems="center"
          bgColor="blue.200"
          maxWidth="768px"
          minHeight="100vh"
        >
          <Flex flex="1" justifyContent="center" alignItems="center">
            <Image src={logoFeridometro} width={['100%', '80%', '60%', '40%']} />
          </Flex>

          <Stack
            flex="10"
            spacing="4rem"
            bgColor="white"
            width="100%"
            height="60%"
            mt="1.2rem"
            borderTopRadius={themeFonts.borderRadius.xLarge}
            padding="1.4rem"
          >
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
              <Stack spacing="1rem">
                <FormControl isInvalid={!!errors.email}>
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none" children={<MdEmail />} />
                    <ChakraInput
                      {...register('email')}
                      placeholder="Digite seu Email"
                      fontSize={themeFonts.fontSizes.smLarge}
                      borderRadius={themeFonts.borderRadius.medium}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none" children={<BsFillKeyFill />} />
                    <ChakraInput
                      {...register('password')}
                      placeholder="Digite sua Senha"
                      fontSize={themeFonts.fontSizes.smLarge}
                      borderRadius={themeFonts.borderRadius.medium}
                    />
                  </InputGroup>
                  <FormErrorMessage color="red">
                    {(errors.password || errors.email) && 'Os campos são obrigatórios'}
                  </FormErrorMessage>
                </FormControl>

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
            </form>

            <Flex flexDirection="column" alignItems="center">
              <Text>Ainda não possui uma conta?</Text>
              <Link to="/register">
                <Text textDecoration="underline" fontWeight="600">
                  Registre-se
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </div>
      <div className="mobileScreen"></div>
    </>
  );
}
