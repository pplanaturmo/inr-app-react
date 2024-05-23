import axios from "axios";
import dayjs from "dayjs";
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
  userId?: number
) => {
  const dosageBetweenUrl = "/dosage/between-dates";
  console.log(baseUrl + dosageBetweenUrl);
  const startingDate = dayjs();
  const finishingDate = startingDate.add(7, "day");
  const formattedStartingDate = startingDate.format("YYYY-MM-DD");
  const formattedFinishingDate = finishingDate.format("YYYY-MM-DD");
  setLoading(true);
  const body = JSON.stringify({
    userId: userId,
    startDate: formattedStartingDate,
    finishDate: formattedFinishingDate,
  });

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${user.accessToken}`,
    },
  };

  try {
    const response = await axios.post(
      await axios.post(baseUrl + dosageBetweenUrl, body, axiosConfig)
    );
    console.log(response);
    // setDosages(response.data);
  } catch (error) {
    console.error("Failed to fetch dosages", error);
  } finally {
    setLoading(false); // Set loading to false after fetching data
  }
};

// @NumberFormat
// @NotNull(message = "User id is required")
// private Long userId;

// @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
// @NotBlank(message = "Start date value is required in format yyyy-MM-dd")
// private String startDate;

// @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
// @NotBlank(message = "Finish date value is required in format yyyy-MM-dd")
// private String finishDate;
