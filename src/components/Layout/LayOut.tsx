import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

export default function LayOut() {
  return (
    <div>
      <Navbar />
      <div className=" mt-4 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
