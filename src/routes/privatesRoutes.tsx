import { Navigate, Outlet } from 'react-router-dom';

import { auth } from '../firebase-config';
import { UserProviderContext } from '../providers/User';

export const PrivatesRoute = () => {
  if (auth.currentUser?.email) {
    return (
      <UserProviderContext>
        <Outlet />
      </UserProviderContext>
    );
  } else {
    return <Navigate to="/" />;
  }
};
