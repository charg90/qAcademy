import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavUser from "../Components/NavUser/NavUser";

const LayoutUserHome = () => {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 mt-0 p-0 ">
      <NavUser />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default LayoutUserHome;
