import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div>Main Layout</div>
      <Outlet />
      <Footer />
    </>
  );
}
