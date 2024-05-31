// import { useEffect, useMemo } from "react";
// import { fetchObservations } from "../services/observationService";
// import { useAppStore } from "../store/useAppStore";

// export const useObservationPageViewmodel = () => {
//   const { observations, fetchObservations, loading } = useObservationsService();
//   const fetchData = useMemo(
//     () => async () => {
//       try {
//         await fetchObservations();
//       } catch (error) {
//         console.error("Failed to fetch dosages", error);
//       }
//     },
//     [fetchObservations]
//   );

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
// };
