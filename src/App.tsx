import { Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import RegisterMeasurementPage from "./pages/Home/RegisterMeasurementPage";
import PendingDosagesPage from "./pages/Home/PendingDosagesPage";
import ProtectedRoute from "./components/HOCs/ProtectedRoute";
import LoggedRoute from "./components/HOCs/LoggedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoggedRoute>
            <LoginLayout />
          </LoggedRoute>
        }
        children={
          <>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </>
        }
      />
      <Route
        path="/inr-app/*"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
        children={
          <>
            <Route index element={<HomePage />} />
            <Route
              path="measurement/add"
              element={<RegisterMeasurementPage />}
            />
            <Route path="dosages/" element={<PendingDosagesPage />} />
          </>
        }
      />
      <Route path="dosages" element={<PendingDosagesPage />} />
    </Routes>
  );
}

export default App;

// function App() {
//     return (
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <LoggedRoute>
//               <LoginLayout />
//             </LoggedRoute>
//           }
//           children={
//             <>
//               <Route index element={<LoginPage />} />
//               <Route path="register" element={<RegisterPage />} />
//             </>
//           }
//         />
//         <Route
//           path="/inr-app/*"
//           element={
//             <ProtectedRoute>
//               <MainLayout />
//             </ProtectedRoute>
//           }
//           children={
//             <>
//               <Route index element={<HomePage />} />
//               <Route
//                 path="measurement/add"
//                 element={<RegisterMeasurementPage />}
//               />
//               <Route path="dosages/" element={<PendingDosagesPage />} />
//             </>
//           }
//         />
//         {/* <Route path="/add-measurement/" element={<RegisterMeasurement />} />
//         <Route path="/add-observation" element={<RegisterObservationPage />} /> */}
//       </Routes>
//     );
//   }

//   export default App;
