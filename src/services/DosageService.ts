import axios from "axios";
export const fetchDosages = async (
  setLoading: (isLoading: boolean) => void,
  setDosages: (
    dosages: {
      id: number;
      value: number;
      date: Date;
      taken: boolean;
    }[]
  ) => void
) => {
  setLoading(true); // Set loading to true before fetching data
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await axios.get("/", { timeout: 50000 }); // Replace with your API endpoint
    setDosages(response.data); // Update dosages in the store
  } catch (error) {
    console.error("Failed to fetch dosages", error);
  } finally {
    setLoading(false); // Set loading to false after fetching data
  }
};
