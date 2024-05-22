import { createBrowserRouter } from "react-router-dom";

import LoginLayout from "../layouts/LoginLayout";
import Home from "../pages/Home/HomePage";
import MainLayout from "../layouts/MainLayout";
import RegisterMeasurement from "../pages/Home/RegisterMeasurementPage";
import PendingDosages from "../pages/Home/PendingDosagesPage";
import LoginPage from "../pages/Authentication/LoginPage";
import RegisterPage from "../pages/Authentication/RegisterPage";
import RegisterObservationPage from "../pages/Home/RegisterObservationPage";
import LoggedRoute from "../components/HOCs/LoggedRoute";
import ProtectedRoute from "../components/HOCs/ProtectedRoute";

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
        path: "/inr-app",
        element: <Home />,
      },
      { path: "/inr-app/measurement/add", element: <RegisterMeasurement /> },
      { path: "/inr-app/dosages/pending", element: <PendingDosages /> },
      //   { path: "/inr-app/measurement/add", element: <RegisterMeasurement /> },
      //   { path: "/inr-app/dosages/pending", element: <PendingDosages /> },
    ],
  },
  {
    path: "/add-measurement/",
    element: <RegisterMeasurement />,
  },
  {
    path: "/add-observation",
    element: <RegisterObservationPage />,
  },
]);
