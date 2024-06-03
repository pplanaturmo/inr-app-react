import Box from "@mui/material/Box/Box";
import Spinner from "../../components/Spinner";
import { useAppStore } from "../../store/useAppStore";
import DosageCard from "../../components/cards/DosageCard";
import { fetchDosages } from "../../services/dosageService";
import { useEffect } from "react";
import ExpectedDateCard from "../../components/cards/ExpectedDateCard";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { fetchExpectedMeasurementDate } from "../../services/expectedDateService";

export default function PendingDosagesPage() {
  const {
    user,
    loading,
    dosages,
    expectedMeasurementDate,
    setLoading,
    setDosages,
    setExpectedMeasurementDate,
  } = useAppStore();

  const fetchData = async () => {
    try {
      await fetchDosages(setLoading, setDosages, user);
      await fetchExpectedMeasurementDate(
        setLoading,
        setExpectedMeasurementDate,
        user
      );
    } catch (error) {
      console.error("Failed to fetch dosages", error);
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const boxWidth = isLgUp ? "60%" : isSmUp ? "70%" : "80%";

  return (
    <>
      {loading ? (
        <Spinner />
      ) : dosages.length > 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={boxWidth}
          mx="auto"
        >
          {dosages.map((dosage, index) => (
            <Box width="100%" marginY={2} key={index}>
              <DosageCard
                dosage={dosage}
                setLoading={setLoading}
                setDosages={setDosages}
                dosages={dosages}
              />
            </Box>
          ))}
          <Box width="100%" marginY={2}>
            <ExpectedDateCard
              expectedMeasurementDate={expectedMeasurementDate}
            />
          </Box>
        </Box>
      ) : (
        <Box width="100%" marginY={2}>
          <ExpectedDateCard expectedMeasurementDate={expectedMeasurementDate} />
        </Box>
      )}
    </>
  );
}
