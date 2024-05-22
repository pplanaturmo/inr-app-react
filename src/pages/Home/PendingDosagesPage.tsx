import Box from "@mui/material/Box/Box";
import Spinner from "../../components/Spinner";
import { useAppStore } from "../../store/useAppStore";
import DosageCard from "../../components/cards/DosageCard";
import { fetchDosages } from "../../services/DosageService";
import { useEffect } from "react";
import ExpectedDateCard from "../../components/cards/ExpectedDateCard";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  const dataArray = [
    {
      id: 1,
      value: 100,
      date: new Date("2024-05-22T10:00:00Z"),
      taken: true,
    },
    {
      id: 2,
      value: 200,
      date: new Date("2024-05-23T14:30:00Z"),
      taken: false,
    },
    {
      id: 3,
      value: 300,
      date: new Date("2024-05-24T08:45:00Z"),
      taken: false,
    },
    {
      id: 4,
      value: 400,
      date: new Date("2024-05-25T16:15:00Z"),
      taken: false,
    },
  ];

  const fechaMedida = new Date("2024-04-30T16:15:00Z");
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const boxWidth = isLgUp ? "70%" : isSmUp ? "80%" : "90%";
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={boxWidth}
          mx="auto"
        >
          {dataArray.map((dosage) => (
            <Box width={"100%"} marginY={2}>
              <DosageCard key={dosage.id} dosage={dosage} />
            </Box>
          ))}
          <Box width={"100%"} marginY={2}>
            <ExpectedDateCard measurementDate={fechaMedida} />
          </Box>
        </Box>
      )}
    </>
  );
}
