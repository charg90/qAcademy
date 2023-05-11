import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navbar/NavBar";
const LayoutPublic = () => {
  return (
    <div className="d-flex flex-column min-height-100">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPublic;
