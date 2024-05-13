import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSessionUser from "../hooks/useSessionUser";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const user = useSessionUser();

  useEffect(() => {
    // if (user) {
    //   navigate("/inr-app");
    // } else {
    //   navigate("/login");
    // }
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <div>Main Layout</div>
      <Outlet />
      <Footer />
    </>
  );
}
