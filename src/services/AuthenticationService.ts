import axios from "axios";

import {
  DosePatternResponse,
  LoginRequest,
  RangeInrResponse,
  RegisterRequest,
  UserResponse,
} from "../types";
import { dosePatternSchema, rangeInrSchema } from "../schemas";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export async function registerUser(data: RegisterRequest) {
  const registerUrl = "/v1/auth/register";

  //TODO poner los nombres correctos de los campos
  const formData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    rangeInr: data.rangeInr,
    dosePattern: data.dosePattern,
    password: data.password,
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
  const userData: UserResponse = response.data;

  console.log(userData);
  return userData;
}

export async function authenticateUser(data: LoginRequest) {
  const registerUrl = "/v1/auth/authenticate";

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

  return userData;
}

export async function fetchRangeInr(
  setLoading: (isLoading: boolean) => void,
  setRangeInrList: (rangeInrList: RangeInrResponse[]) => void
) {
  const allRangeInrUrl = "/range-inr/all";

  try {
    setLoading(true);
    const { data } = await axios.get(baseUrl + allRangeInrUrl);

    const rangeInrList = data
      .map(rangeInrSchema.parse)
      .map((range: RangeInrResponse) => ({
        ...range,
      }));
    const validRangeInrList = rangeInrList.map(rangeInrSchema.parse);
    setRangeInrList(validRangeInrList);
  } catch (error) {
    console.error("Failed to fetch Inr Ranges", error);
  }
}

export async function fetchDosePatterns(
  setLoading: (isLoading: boolean) => void,
  setDosePatternList: (dosePatternList: DosePatternResponse[]) => void
) {
  const allDosePatternsUrl = "/dose-pattern/all";

  try {
    setLoading(true);
    const { data } = await axios.get(baseUrl + allDosePatternsUrl);

    const dosePatternList = data
      .map(dosePatternSchema.parse)
      .map((pattern: DosePatternResponse) => ({
        ...pattern,
      }));
    const validDosePatternList = dosePatternList.map(dosePatternSchema.parse);
    setDosePatternList(validDosePatternList);
    console.log(validDosePatternList);
  } catch (error) {
    console.error("Failed to fetch Inr Ranges", error);
  } finally {
    setLoading(false);
  }
}
