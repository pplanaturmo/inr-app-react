import axios from "axios";

import {
  Observation,
  ObservationForm,
  ObservationResponse,
  UserResponse,
} from "../types";
import { observationResponseSchema, observationSchema } from "../schemas";
import dayjs from "dayjs";

const baseUrl = import.meta.env.VITE_BASE_API_URL;
export async function registerObservation(
  data: ObservationForm,
  user: UserResponse | null
) {
  const observationUrl = "/observation/create/";
  const formattedDate = data.date.format("YYYY-MM-DD");
  const body = JSON.stringify({
    userId: user?.id,
    date: formattedDate,
    cause: data.cause,
    description: data.description,
  });
  console.log(baseUrl + observationUrl);
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

export const fetchObservations = async (
  setLoading: (isLoading: boolean) => void,
  setObservations: (observation: Observation[]) => void,
  user: UserResponse | null
) => {
  const getObservationsUrl = "/observation/user/" + user?.id;
  console.log(baseUrl + getObservationsUrl);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${user?.accessToken}`,
    },
  };
  try {
    const { data } = await axios.get(baseUrl + getObservationsUrl, axiosConfig);

    const observationList = data
      .map(observationResponseSchema.parse)
      .map((observation: ObservationResponse) => ({
        ...observation,
        date: dayjs(observation.date).toDate(),
      }));

    const validObservationsList = observationList.map(observationSchema.parse);

    setObservations(validObservationsList);
  } catch (error) {
    console.error("Failed to fetch observations", error);
  } finally {
    setLoading(false);
  }
};
