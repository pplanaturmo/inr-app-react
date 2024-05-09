import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import LoginLayout from "../layouts/LoginLayout";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";

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
        index: true,
        element: <Home />,
      },
      {},
    ],
  },
]);
