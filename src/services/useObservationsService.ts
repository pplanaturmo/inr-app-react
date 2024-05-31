// import { useState } from "react";
// import { useAppStore } from "../store/useAppStore";

// export const useObservationsService() => {
//     const { user, observations, setLoading, setObservations } =
//     useAppStore();
// const[loading, setLoading] = useState(false)

//     const fetchObservations = () => {
//         setLoading(true)
//         ObservationsApi.fetchObservations()
//         .then(res => setObservations(res))
//         .finally(()=> setLoading(false))
//     }

//     export{
//         observations, fetchObservations, loading
//     }
// }
