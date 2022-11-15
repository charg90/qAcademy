import React from "react";
import Intro from "./Components/Intro/Intro";
import Target from "./Components/Target/Target";
import Alumnos from "./Components/Alumnos/Alumnos";
import Footer from "./Components/Footer/Footer";
import Cursos from "./Components/Cursos/Cursos";
import Navbar from "./Components/Navbar/NavBar";
import "./app.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container fluid className="bg">
      <Navbar />
      <Intro />
      <Target />
      <Alumnos />
      <Cursos />
      <Footer />
    </Container>
  );
}

export default App;
