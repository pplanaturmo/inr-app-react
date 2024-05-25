import axios from "axios";

import { MeasurementRequest, UserResponse } from "../types";

export async function registerMeasurement(
  data: MeasurementRequest,
  user: UserResponse
) {
  const baseUrl = import.meta.env.VITE_BASE_API_URL;
  const measurementUrl = "/measurement/create/" + user.id;

  const measurementValue =
    data.measurementInteger + data.measurementDecimal / 10;
  const body = JSON.stringify({ value: measurementValue });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const response = await axios.post(
    baseUrl + measurementUrl,
    body,
    axiosConfig
  );

  return response;
}
