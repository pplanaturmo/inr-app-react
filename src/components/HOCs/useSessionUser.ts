// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppStore } from "../../store/useAppStore";

// const useSessionUser = () => {
//   const navigate = useNavigate();
//   const user = useAppStore((state) => state.user);

//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (!storedUser && !user) {
//       navigate("/");
//     }
//   }, [navigate, user]);

//   return user;
// };

// export default useSessionUser;
