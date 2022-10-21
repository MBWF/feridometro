import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div>
      <Heading>Login page</Heading>
      <Link to="/home">Ir para Home</Link>
    </div>
  );
}
