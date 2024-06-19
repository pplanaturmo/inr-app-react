import axios from "axios";
import { ExpectedMeasurementDate, UserResponse } from "../types";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const fetchExpectedMeasurementDate = async (
  setLoading: (isLoading: boolean) => void,
  setExpectedMeasurementDate: (
    expectedMeasurementDate: ExpectedMeasurementDate
  ) => void,
  user: UserResponse | null
) => {
  const expectedMeasurementUrl =
    "/expected-measurement-dates/user/" + user?.id + "/last";

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user?.access_token}`,
    },
  };

  try {
    const { data } = await axios.get(
      baseUrl + expectedMeasurementUrl,
      axiosConfig
    );
    setExpectedMeasurementDate(data);
  } catch (error) {
    console.error("Failed to fetch date", error);
  } finally {
    setLoading(false);
  }
};
