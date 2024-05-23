import { Route, Routes } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/homepage/HomePage";
import RegisterMeasurementPage from "./pages/patient/RegisterMeasurementPage";
import PendingDosagesPage from "./pages/patient/PendingDosagesPage";
import ProtectedRoute from "./components/HOCs/WithAuth";
import LoggedRoute from "./components/HOCs/WithSession";

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
