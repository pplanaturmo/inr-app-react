import axios from "axios";

import { MeasurementRequest, UserResponse } from "../types";

export async function registerMeasurement(
  data: MeasurementRequest,
  user: UserResponse
) {
  console.log(data);
  const baseUrl = "http://localhost:8080";
  const measurementUrl = "/api/measurement/" + user.id;
  //   console.log(data.integer);
  //   console.log(data.decimal);
  const measurementValue =
    data.measurementInteger + data.measurementDecimal / 10;

  console.log(measurementValue);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const response = await axios.post(
    baseUrl + measurementUrl,
    measurementValue,
    axiosConfig
  );

  return response;
}
