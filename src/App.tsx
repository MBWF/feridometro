import './globalStyles.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import { UserProviderContext } from './providers/User';
import { Routes } from './routes/routes';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <UserProviderContext>
          <Routes />
        </UserProviderContext>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
