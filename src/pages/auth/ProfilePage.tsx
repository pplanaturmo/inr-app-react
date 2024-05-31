import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import ProfileCard from "../../components/cards/ProfileCard";
import { useAppStore } from "../../store/useAppStore";
import { fetchDosePatterns, fetchRangeInr } from "../../services/authService";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";

export default function ProfilePage() {
  const { user, loading, setLoading, setRangeInrList, setDosePatternList } =
    useAppStore();
  const fetchData = async () => {
    try {
      await fetchRangeInr(setLoading, setRangeInrList);
      await fetchDosePatterns(setLoading, setDosePatternList);
    } catch (error) {
      console.error("Failed to fetch dosages", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) {
    return <Typography variant="h6">No user data available</Typography>;
  }

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
          width={"80%"}
          mx="auto"
        >
          <ProfileCard />
        </Box>
      )}
    </>
  );
}
