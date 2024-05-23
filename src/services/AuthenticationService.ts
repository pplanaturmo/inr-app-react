import axios from "axios";

import { LoginRequest, RegisterRequest, UserResponse } from "../types";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export async function registerUser(data: RegisterRequest) {
  const registerUrl = "/api/v1/auth/register";

  //TODO poner los nombres correctos de los campos
  const formData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: data.password,
    phone: data.phone,
    idCard: data.idCard,
    healthCard: data.healthCard,
    dataConsent: data.dataConsent,
  };

  console.log(formData);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    baseUrl + registerUrl,
    formData,
    axiosConfig
  );

  return response;
}

export async function authenticateUser(data: LoginRequest) {
  const registerUrl = "/api/v1/auth/authenticate";

  //TODO poner los nombres correctos de los campos
  const formData = {
    email: data.email,
    password: data.password,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    baseUrl + registerUrl,
    formData,
    axiosConfig
  );

  const userData: UserResponse = response.data;
  console.log(userData);
  return userData;
  // return response;
}
