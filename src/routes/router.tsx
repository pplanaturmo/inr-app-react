import { createBrowserRouter } from "react-router-dom";

import LoginLayout from "../layouts/LoginLayout";
import Home from "../pages/Home/HomePage";
import MainLayout from "../layouts/MainLayout";
import RegisterMeasurement from "../pages/Home/RegisterMeasurementPage";
import PendingDosages from "../pages/Home/PendingDosagesPage";
import ProtectedRoute from "../components/ProtectedRoute";
import LoggedRoute from "../components/LoggedRoute";
import LoginPage from "../pages/Authentication/LoginPage";
import RegisterPage from "../pages/Authentication/RegisterPage";

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
  {},

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
    ],
  },
]);

// //primer tipo de prote
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginLayout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to="/login" replace />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//     ],
//   },
//   {},
//   {
//     path: "/inr-app",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/inr-app",
//         element: (
//           <ProtectedRoute>
//             <Home />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/inr-app/measurement/add",
//         element: (
//           <ProtectedRoute>
//             <RegisterMeasurement />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "/inr-app/dosages/pending",
//         element: (
//           <ProtectedRoute>
//             <PendingDosages />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);

//sin proteccion

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginLayout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to="/login" replace />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//     ],
//   },
//   {},

//   {
//     path: "/inr-app",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/inr-app",
//         element: <Home />,
//       },
//       { path: "/inr-app/measurement/add", element: <RegisterMeasurement /> },
//       { path: "/inr-app/dosages/pending", element: <PendingDosages /> },
//     ],
//   },
// ]);
