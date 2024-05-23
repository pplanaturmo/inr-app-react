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
        element: <PendingDosages />,
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
        path: "/inr-app/observation/add",
        element: (
          <WithPatient>
            <RegisterObservationPage />
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
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <LoggedRoute>
//         <LoginLayout />
//       </LoggedRoute>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <LoginPage />,
//       },
//       {
//         path: "/register",
//         element: <RegisterPage />,
//       },
//     ],
//   },
//   {
//     path: "/inr-app",
//     element: (
//       <ProtectedRoute>
//         <MainLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "patient",
//         element: (
//           <PatientRoute>
//             <PatientLayout />
//           </PatientRoute>
//         ),
//         children: [
//           { index: true, element: <PatientDashboard /> },
//           { path: "dosages", element: <PendingDosages /> },
//           { path: "measurement/add", element: <RegisterMeasurement /> },
//           { path: "observation/add", element: <RegisterObservationPage /> },
//           { path: "information", element: <InformationPage /> },
//         ],
//       },
//       {
//         path: "doctor",
//         element: (
//           <DoctorRoute>
//             <DoctorLayout />
//           </DoctorRoute>
//         ),
//         children: [
//           { index: true, element: <DoctorDashboard /> },
//           // Add doctor-specific routes here
//         ],
//       },
//     ],
//   },
// ]);
