import { useCallback } from 'react';
import { Outlet, Route, Routes as AllRoutes, useParams } from 'react-router-dom';

import { Header } from '../Components/Header';
import { CoveragePage } from '../pages/Coverage';
import { EvaluationPage } from '../pages/Evaluation';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegisterPage } from '../pages/Register';
import { TreatmentPage } from '../pages/Treatment';
import { UserProviderContext } from '../providers/User';
import { theme } from '../styles/global';
import { PrivatesRoute } from './privatesRoutes';

function DetailsLayout() {
  const { issuePlace } = useParams<{ issuePlace: string }>();

  const handleLocationName = useCallback(() => {
    let locationName = '';

    if (location.pathname.includes('evaluation')) locationName = 'Avaliação';

    if (location.pathname.includes('treatment')) locationName = 'Tratamento';

    if (location.pathname.includes('coverage')) locationName = 'Cobertura';

    return `${issuePlace}: ${locationName}`;
  }, []);

  return (
    <>
      <Header
        redirectLink="/home"
        areaName={handleLocationName()}
        bgColor={theme.colors.blue_600}
        color={theme.colors.white_100}
      />
      <Outlet />
    </>
  );
}

export function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivatesRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/:issuePlace" element={<DetailsLayout />}>
          <Route path="evaluation" element={<EvaluationPage />} />
          <Route path="treatment" element={<TreatmentPage />} />
          <Route path="coverage" element={<CoveragePage />} />
        </Route>
      </Route>
    </AllRoutes>
  );
}
