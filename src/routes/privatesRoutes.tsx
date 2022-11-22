import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { auth } from '../firebase-config';
import { useUser } from '../providers/User/useUser';

interface PrivatesLayoutProps {
  children: ReactNode;
}

export const PrivatesRoute = () => {
  const { userData } = useUser();

  if (userData?.email) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
