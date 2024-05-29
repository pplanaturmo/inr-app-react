import axios from "axios";

import { MeasurementRequest, UserResponse } from "../types";
import { Zoom, toast } from "react-toastify";

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

  // const response = await axios.post(
  //   baseUrl + measurementUrl,
  //   body,
  //   axiosConfig
  // );

  // return response;

  try {
    const response = await axios.post(
      baseUrl + measurementUrl,
      body,
      axiosConfig
    );
    toast.success("Medida registrada correctamente", {
      transition: Zoom,
    });

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(`${error.response.data.message || error.response.status}`, {
        transition: Zoom,
      });
      console.log(`${error.response.data.message || error.response.status}`);
    } else {
      toast.warning("No se ha podido conectar con el servidor", {
        transition: Zoom,
      });
    }
  }
}
