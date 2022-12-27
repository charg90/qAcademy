import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Target from "../../Components/Target/Target";
import NavBar from "../../Components/Navbar/NavBar";
import Alumnos from "../../Components/Alumnos/Alumnos";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Intro from "../../Components/Intro/Intro";
import ModalEbook from "../../Components/Modals/ModalEbook/ModalEbook";
import Cursos from "../../Components/Target/Target";

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
