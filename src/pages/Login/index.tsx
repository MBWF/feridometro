import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoFeridometro from '../../assets/logoFeridometro.png';
import { ButtonRedirect } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { theme, themeFonts } from '../../styles/global';

export function LoginPage() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      bgColor="blue.200"
      minHeight="100vh"
    >
      <Image src={logoFeridometro} />

      <Stack
        spacing="4rem"
        bgColor="white"
        width="100%"
        height="60%"
        mt="1.2rem"
        borderTopRadius={themeFonts.borderRadius.xLarge}
        padding="1.4rem 1.4rem 25% 1.4rem"
      >
        <Stack spacing="1rem">
          <Input inputType="email" inputIcon={<MdEmail />} placeholder="nome@email.com" />

          <Input inputType="password" inputIcon={<BsFillKeyFill />} placeholder="Senha" />

          <Flex justifyContent="center">
            <ButtonRedirect
              text="Login"
              bgColor={theme.colors.blue_600}
              color="white"
              width="15rem"
            />
          </Flex>
        </Stack>

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
  );
}
