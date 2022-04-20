import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayot = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayot;
