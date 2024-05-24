import { createBrowserRouter } from "react-router-dom";

import LoginLayout from "../layouts/LoginLayout";

import MainLayout from "../layouts/MainLayout";
import RegisterMeasurement from "../pages/patient/RegisterMeasurementPage";
import PendingDosages from "../pages/patient/PendingDosagesPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import RegisterObservationPage from "../pages/patient/RegisterObservationPage";
import LoggedRoute from "../components/HOCs/WithSession";
import ProtectedRoute from "../components/HOCs/WithAuth";
import InformationPage from "../pages/patient/InformationPage";
import WithPatient from "../components/HOCs/WithPatient";
import ObservationsPage from "../pages/patient/ObservationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoggedRoute>
        <LoginLayout />
      </LoggedRoute>
    ),
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/inr-app",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <WithPatient>
            <PendingDosages />
          </WithPatient>
        ),
      },

      {
        path: "/inr-app/dosages/",
        element: (
          <WithPatient>
            <PendingDosages />
          </WithPatient>
        ),
      },
      {
        path: "/inr-app/measurement/add",
        element: (
          <WithPatient>
            <RegisterMeasurement />
          </WithPatient>
        ),
      },

      {
        path: "/inr-app/observations/",
        element: (
          <WithPatient>
            <ObservationsPage />
          </WithPatient>
        ),
      },
      {
        path: "/inr-app/information",

        element: (
          <WithPatient>
            <InformationPage />,
          </WithPatient>
        ),
      },
      {
        path: "/inr-app/observations/add",
        element: (
          <WithPatient>
            <RegisterObservationPage />
          </WithPatient>
        ),
      },
    ],
  },
]);
