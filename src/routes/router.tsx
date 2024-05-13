import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/LoginPage";
import Register from "../pages/Authentication/RegisterPage";
import LoginLayout from "../layouts/LoginLayout";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import RegisterMeasurement from "../pages/Home/RegisterMeasurement";
import PendingDosages from "../pages/Home/PendingDosages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
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
    element: <MainLayout />,
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
