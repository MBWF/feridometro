import { Route, Routes as AllRoutes } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';

export function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </AllRoutes>
  );
}
