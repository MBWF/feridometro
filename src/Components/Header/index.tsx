import { Flex, Text } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type HeaderProps = {
  redirectLink: string;
};

export function Header({ redirectLink }: HeaderProps) {
  return (
    <Flex alignItems="center" width="100%" height="3rem" paddingX="1rem">
      <Link to={redirectLink}>
        <BiArrowBack />
      </Link>

      <Text w="100%" textAlign="center" paddingRight="1rem">
        Criar Conta
      </Text>
    </Flex>
  );
}
