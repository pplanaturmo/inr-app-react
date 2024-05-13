import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/LoginPage";
import Register from "../pages/authentication/RegisterPage";
import LoginLayout from "../layouts/LoginLayout";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import RegisterMeasurement from "../pages/home/RegisterMeasurement";
import PendingDosages from "../pages/home/PendingDosages";
import ProtectedRoute from "../components/ProtectedRoute";
import LoggedRoute from "../components/LoggedRoute";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
