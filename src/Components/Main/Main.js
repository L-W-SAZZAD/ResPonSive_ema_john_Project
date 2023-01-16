import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../ShearComponent/Footer/Footer";
import Navbar from "../ShearComponent/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
