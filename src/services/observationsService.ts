import axios from "axios";

import {
  Observation,
  ObservationForm,
  ObservationResponse,
  UserResponse,
} from "../types";
import { observationResponseSchema, observationSchema } from "../schemas";
import dayjs from "dayjs";
import { Zoom, toast } from "react-toastify";

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

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.access_token}`,
    },
  };

  try {
    const response = await axios.post(
      baseUrl + observationUrl,
      body,
      axiosConfig
    );
    toast.success("Observación registrada correctamente", {
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

export const fetchObservations = async (
  setLoading: (isLoading: boolean) => void,
  setObservations: (observation: Observation[]) => void,
  user: UserResponse | null
) => {
  const getObservationsUrl = "/observation/user/" + user?.id;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.access_token}`,
    },
  };
  try {
    const { data } = await axios.get(baseUrl + getObservationsUrl, axiosConfig);

    const observationList = data
      .map(observationResponseSchema.parse)
      .map((observation: ObservationResponse) => ({
        ...observation,
        date: dayjs(observation.date).toDate(),
        updatedAt: dayjs(observation.updatedAt).toDate(),
      }));

    const validObservationsList: Observation[] = observationList.map(
      observationSchema.parse
    );
    const sortedObservationsList: Observation[] = validObservationsList.sort(
      (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
    );

    setObservations(sortedObservationsList);
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
  } finally {
    setLoading(false);
  }
};
