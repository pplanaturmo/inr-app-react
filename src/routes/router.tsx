import { createBrowserRouter } from "react-router-dom";

import LoginLayout from "../layouts/LoginLayout";

import MainLayout from "../layouts/MainLayout";
import RegisterMeasurement from "../pages/patient/RegisterMeasurementPage";
import PendingDosages from "../pages/patient/PendingDosagesPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoggedRoute from "../components/HOCs/WithSession";
import ProtectedRoute from "../components/HOCs/WithAuth";
import InformationPage from "../pages/patient/InformationPage";
import WithPatient from "../components/HOCs/WithPatient";
import ObservationsPage from "../pages/patient/ObservationsPage";
import LoginLegalWarning from "../pages/auth/LoginLegalWarningPage";
import LegalWarning from "../components/LegalWarning";
import WithProfessional from "../components/HOCs/WithProfessional";
import AlertsPage from "../pages/professional/AlertsPage";
import PatientsPage from "../pages/professional/PatientsPage";
import ProfessionalsPage from "../pages/manager/ProfessionalsPage";
import WithManager from "../components/HOCs/WithManager";
import WithAdmin from "../components/HOCs/WithAdmin";
import UserListPage from "../pages/admin/UserListPage";
import DepartmentsListPage from "../pages/admin/DepartmentsListPage";
import ProfilePage from "../pages/auth/ProfilePage";
import Admin from "../pages/admin/Admin";
import UpdateProfilePage from "../pages/auth/UpdateProfilePage";
import UpdatePasswordPage from "../pages/auth/UpdatePasswordPage";

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
      {
        path: "/legal",
        element: <LoginLegalWarning />,
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
        path: "/inr-app/alerts",
        element: (
          <WithProfessional>
            <AlertsPage />,
          </WithProfessional>
        ),
      },
      {
        path: "/inr-app/patients",
        element: (
          <WithProfessional>
            <PatientsPage />,
          </WithProfessional>
        ),
      },
      {
        path: "/inr-app/professionals",
        element: (
          <WithManager>
            <ProfessionalsPage />,
          </WithManager>
        ),
      },
      {
        path: "/inr-app/users-list",
        element: (
          <WithAdmin>
            <UserListPage />,
          </WithAdmin>
        ),
      },
      {
        path: "/inr-app/departments",
        element: (
          <WithAdmin>
            <DepartmentsListPage />,
          </WithAdmin>
        ),
      },
      {
        path: "/inr-app/admin",
        element: (
          <WithAdmin>
            <Admin />,
          </WithAdmin>
        ),
      },
      {
        path: "/inr-app/profile",
        element: <ProfilePage />,
      },
      {
        path: "/inr-app/profile/update",
        element: <UpdateProfilePage />,
      },
      {
        path: "/inr-app/profile/password",
        element: <UpdatePasswordPage />,
      },
      {
        path: "/inr-app/legal",
        element: <LegalWarning />,
      },
    ],
  },
]);
