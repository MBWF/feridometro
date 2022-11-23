import { useContext } from 'react';

import { UserProvider } from '.';
import { UserProviderProps } from './types';

export function useUser() {
  const context: UserProviderProps = useContext(UserProvider);

  return context;
}
