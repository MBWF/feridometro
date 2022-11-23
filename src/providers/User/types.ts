import { ReactNode } from 'react';

export interface UserDataProps {
  name: string;
  email: string;
}

export interface UserProviderProps {
  userData: UserDataProps | null;
  logout: () => void;
}

export type IUserProvider = {
  children: ReactNode;
};
