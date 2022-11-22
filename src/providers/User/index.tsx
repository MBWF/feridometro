import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDocs, query, where } from 'firebase/firestore/lite';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth, userCollectionRef } from '../../firebase-config';
import { IUserProvider, UserDataProps, UserProviderProps } from './types';

export const UserProvider = createContext({} as UserProviderProps);

export function UserProviderContext({ children }: IUserProvider) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserDataProps | null>(null);

  onAuthStateChanged(auth, async (currentUser) => {
    const getUserBd = query(userCollectionRef, where('email', '==', currentUser?.email));
    const docs = await getDocs(getUserBd);

    const foundUser = docs.docs.map((doc) => ({ ...doc.data() }));

    const user = {
      name: String(foundUser[0].name),
      email: String(foundUser[0].email),
    };

    setUserData(user as UserDataProps);
  });

  const logout = async () => {
    await signOut(auth);
    navigate('/');
    setUserData(null);
  };

  const value = { userData, logout };
  return <UserProvider.Provider value={value}>{children}</UserProvider.Provider>;
}
