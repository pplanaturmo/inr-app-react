import axios from "axios";
import dayjs from "dayjs";
import { dosageResponseSchema } from "../schemas";
import { dosageSchema } from "../schemas/dosageSchema";
import { Dosage, DosageResponse, UserResponse } from "../types";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchDosages = async (
  setLoading: (isLoading: boolean) => void,
  setDosages: (
    dosages: {
      id: number;
      value: number;
      date: Date;
      taken: boolean;
    }[]
  ) => void,
  // userId?: number
  user: UserResponse | null
) => {
  const dosageBetweenUrl = "/dosage/between-dates";

  const startingDate = dayjs();
  const finishingDate = startingDate.add(7, "day");
  const formattedStartingDate = startingDate.format("YYYY-MM-DD");
  const formattedFinishingDate = finishingDate.format("YYYY-MM-DD");
  setLoading(true);
  const body = JSON.stringify({
    userId: user?.id,
    startDate: formattedStartingDate,
    finishDate: formattedFinishingDate,
  });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${user?.accessToken}`,
    },
  };

  try {
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
  dosageId: number
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
        // Authorization: `Bearer ${user?.accessToken}`,
      },
    };

    await axios.put(baseUrl + dosageUpdate, body, axiosConfig);

    const updatedDosages = dosages.map((dosage) =>
      dosage.id === dosageId ? { ...dosage, taken: true } : dosage
    );
    setDosages(updatedDosages);
    setLoading(false);
  } catch (error) {
    console.error("Error:", error);
  }
};
