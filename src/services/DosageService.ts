import axios from "axios";
import dayjs from "dayjs";
import { dosageResponseSchema } from "../schemas";
import { dosageSchema } from "../schemas/dosageSchema";
import { Dosage, DosageResponse, UserResponse } from "../types";
import { Zoom, toast } from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchDosages = async (
  setLoading: (isLoading: boolean) => void,
  setDosages: (dosages: Dosage[]) => void,
  user: UserResponse | null
) => {
  const dosageBetweenUrl = "/dosage/between-dates";

  const startingDate = dayjs();
  const finishingDate = startingDate.add(7, "day");
  const formattedStartingDate = startingDate.format("YYYY-MM-DD");
  const formattedFinishingDate = finishingDate.format("YYYY-MM-DD");
  const body = JSON.stringify({
    userId: user?.id,
    startDate: formattedStartingDate,
    finishDate: formattedFinishingDate,
  });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.access_token}`,
    },
  };

  try {
    setLoading(true);
    const { data } = await axios.post(
      baseUrl + dosageBetweenUrl,
      body,
      axiosConfig
    );

    const dosageList = data
      .map(dosageResponseSchema.parse)
      .map((dosage: DosageResponse) => ({
        ...dosage,
        date: dayjs(dosage.date).toDate(),
      }));

    const validDosageList = dosageList.map(dosageSchema.parse);

    setDosages(validDosageList);
  } catch (error) {
    console.error("Failed to fetch dosages", error);
    toast.warning("No se ha podido conectar con el servidor", {
      transition: Zoom,
    });
  } finally {
    setLoading(false);
  }
};

export const updateDoseTaken = async (
  setLoading: (isLoading: boolean) => void,
  setDosages: (
    dosages: {
      id: number;
      value: number;
      date: Date;
      taken: boolean;
    }[]
  ) => void,
  dosages: Dosage[],
  dosageId: number,
  user: UserResponse | null
) => {
  setLoading(true);
  try {
    const dosageUpdate = "/dosage/update";
    const body = JSON.stringify({
      id: dosageId,
      taken: true,
    });

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.access_token}`,
      },
    };

    await axios.put(baseUrl + dosageUpdate, body, axiosConfig);
    toast.success("Toma almacenada correctamente", {
      transition: Zoom,
    });
    const updatedDosages = dosages.map((dosage) =>
      dosage.id === dosageId ? { ...dosage, taken: true } : dosage
    );
    setDosages(updatedDosages);
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
  } finally {
    setLoading(false);
  }
};
