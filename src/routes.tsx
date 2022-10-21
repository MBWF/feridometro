import { Route, Routes as AllRoutes } from 'react-router-dom';

import { HomePage } from './pages/Home';

export function Routes() {
  return (
    <AllRoutes>
      <Route path="/home" element={<HomePage />} />
    </AllRoutes>
  );
}
