import axios from "axios";

import { LoginRequest, RegisterRequest, UserResponse } from "../types";

import { Bounce, Zoom, toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export async function registerUser(data: RegisterRequest) {
  const registerUrl = "/v1/auth/register";

  const formData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    rangeInr: data.rangeInr,
    dosePattern: data.dosePattern,
    password: data.password,
    dataConsent: data.dataConsent,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      baseUrl + registerUrl,
      formData,
      axiosConfig
    );
    toast.success("Usuario registrado correctamente", {
      transition: Zoom,
    });

    const userData: UserResponse = response.data;
    return userData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(`${error.response.data.message || error.response.status}`, {
        transition: Zoom,
      });
    } else {
      toast.warning("No se ha podido conectar con el servidor", {
        transition: Zoom,
      });
    }
  }
}

export async function authenticateUser(data: LoginRequest) {
  const authUrl = "/v1/auth/authenticate";

  const formData = {
    email: data.email,
    password: data.password,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(baseUrl + authUrl, formData, axiosConfig);

    toast.success("Usuario conectado correctamente", {
      autoClose: 500,
      transition: Bounce,
    });

    const userData: UserResponse = response.data;

    return userData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error("Usuario o contraseña incorrectos", {
        transition: Zoom,
      });
    } else {
      toast.warning("No se ha podido conectar con el servidor", {
        transition: Zoom,
      });
    }
  }
}
