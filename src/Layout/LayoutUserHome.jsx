import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavUser from "../Components/NavUser/NavUser";

const LayoutUserHome = () => {
  return (
    <Container
      fluid
      className={`bg-dark d-flex flex-column min-vh-100 mt-0 p-0 align-items-center justify-content-center`}
    >
      <NavUser />
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default LayoutUserHome;
