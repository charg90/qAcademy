import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Target from "../../Components/Target/Target";
import NavBar from "../../Components/Navbar/NavBar";
import Alumnos from "../../Components/Alumnos/Alumnos";
import ContactUs from "../../Components/ContactUs/ContactUs";

import Intro from "../../Components/Intro/Intro";
import ModalEbook from "../../Components/Modals/ModalEbook/ModalEbook";
import Cursos from "../../Components/Cursos/Cursos";
const Home = () => {
  return (
    <>
      <ModalEbook />
      <Container fluid className="bg p-0 ">
        <Intro />
        <Target />
        <Alumnos />
        <Cursos />
        <ContactUs />
      </Container>
    </>
  );
};

export default Home;
