import axios from "axios";

import { RegisterRequest } from "../types";

export async function registerUser(data: RegisterRequest) {
  const baseUrl = "";
  const registerUrl = "/api/v1/auth/register";

  //TODO poner los nombres correctos de los campos
  const formData = {
    fullname: data.name,
    surname: data.surname,
    email: data.email,
    password: data.password,
    phone: data.phone,
    idCard: data.idCard,
    healthCard: data.healthCard,
    consentData: data.dataConsent,
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
