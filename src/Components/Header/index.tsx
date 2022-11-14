import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface HeaderProps extends FlexProps {
  redirectLink: string;
  areaName: string;
}

export function Header({ redirectLink, areaName, ...props }: HeaderProps) {
  return (
    <Flex alignItems="center" width="100%" height="3rem" paddingX="1rem" {...props}>
      <Link to={redirectLink}>
        <BiArrowBack />
      </Link>

      <Text w="100%" textAlign="center" paddingRight="1rem">
        {areaName}
      </Text>
    </Flex>
  );
}
