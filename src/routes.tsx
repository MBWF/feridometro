import { Outlet, Route, Routes as AllRoutes, useParams } from 'react-router-dom';

import { Header } from './Components/Header';
import { EvaluationPage } from './pages/Evaluation';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { theme } from './styles/global';

function EvaluationLayout() {
  const { issuePlace } = useParams<{ issuePlace: string }>();
  return (
    <>
      <Header
        redirectLink="/home"
        areaName={`${issuePlace}: Avaliação`}
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
      <Route path="/:issuePlace" element={<EvaluationLayout />}>
        <Route path="evaluation" element={<EvaluationPage />} />
      </Route>
    </AllRoutes>
  );
}
