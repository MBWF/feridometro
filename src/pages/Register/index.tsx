import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { BsFillKeyFill, BsPersonSquare } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoFeridometro from '../../assets/logoFeridometro.png';
import { ButtonRedirect } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { theme, themeFonts } from '../../styles/global';

export function RegisterPage() {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="768px"
        bgColor="blue.200"
        minHeight="100vh"
      >
        <Header redirectLink="/" />
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
          <Stack spacing="1rem">
            <Input inputType="text" inputIcon={<BsPersonSquare />} placeholder="Nome" />

            <Input
              inputType="text"
              inputIcon={<FaGraduationCap />}
              placeholder="Instituição"
            />

            <Input
              inputType="email"
              inputIcon={<MdEmail />}
              placeholder="nome@email.com"
            />

            <Input
              inputType="password"
              inputIcon={<BsFillKeyFill />}
              placeholder="Senha"
            />

            <Input
              inputType="password"
              inputIcon={<BsFillKeyFill />}
              placeholder="Repetir a senha"
            />

            <Flex justifyContent="center">
              <ButtonRedirect
                text="Registrar"
                bgColor={theme.colors.blue_600}
                color="white"
                width="15rem"
              />
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
