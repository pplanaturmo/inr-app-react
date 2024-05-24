import axios from "axios";

import { ObservationRequest, UserResponse } from "../types";

export async function registerObservation(
  data: ObservationRequest,
  user: UserResponse
) {
  // console.log(data);
  const baseUrl = import.meta.env.VITE_BASE_API_URL;
  const observationUrl = "/observation/create/" + user.id;

  console.log(baseUrl + observationUrl);

  const body = JSON.stringify({
    date: data.date.toISOString,
    cause: data.cause,
    description: data.description,
  });

  console.log(body);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const response = await axios.post(
    baseUrl + observationUrl,
    body,
    axiosConfig
  );

  return response;
}
