import React, { useEffect } from "react";
import Intro from "./Components/Intro/Intro";
import Target from "./Components/Target/Target";
import Alumnos from "./Components/Alumnos/Alumnos";
import Footer from "./Components/Footer/Footer";
import Cursos from "./Components/Cursos/Cursos";
import Navbar from "./Components/Navbar/NavBar";
import ContactUs from "./Components/ContactUs/ContactUs";
import "./app.css";
import { Container } from "react-bootstrap";
import ModalEbook from "./Components/Modals/ModalEbook/ModalEbook";
function App() {
  return (
    <>
      {" "}
      <Container fluid className="bg p-0 ">
        <Navbar />
        <Intro />
        <Target />
        <Alumnos />
        <Cursos />
        <ContactUs />
        <Footer />
      </Container>
    </>
  );
}

export default App;
