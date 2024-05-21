import Box from "@mui/material/Box/Box";
import Spinner from "../../components/Spinner";
import { useAppStore } from "../../store/useAppStore";
import DosageCard from "../../components/cards/DosageCard";
import { fetchDosages } from "../../services/DosageService";
import { useEffect } from "react";

export default function PendingDosagesPage() {
  const { loading, dosages, setLoading, setDosages } = useAppStore();

  useEffect(() => {
    console.log(loading + "1");
    const fetchData = async () => {
      try {
        await fetchDosages(setLoading, setDosages);
      } catch (error) {
        console.error("Failed to fetch dosages", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(loading + "2");
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Box height={"40rem"}>
          <div>content</div>
        </Box>
      )}
    </>
  );
}
