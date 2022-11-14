import { Outlet, Route, Routes as AllRoutes, useParams } from 'react-router-dom';

import { Header } from './Components/Header';
import { EvaluationPage } from './pages/Evaluation';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { TreatmentPage } from './pages/Treatment';
import { theme } from './styles/global';

function DetailsLayout() {
  const { issuePlace } = useParams<{ issuePlace: string }>();

  const isTreatmentLocation = location.pathname.includes('treatment');
  return (
    <>
      <Header
        redirectLink="/home"
        areaName={`${issuePlace}: ${isTreatmentLocation ? 'Tratamento' : 'Avaliação'}`}
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
      <Route path="/home" element={<HomePage />} />
      <Route path="/:issuePlace" element={<DetailsLayout />}>
        <Route path="evaluation" element={<EvaluationPage />} />
        <Route path="treatment" element={<TreatmentPage />} />
      </Route>
    </AllRoutes>
  );
}
