import styles from "./target.module.css";
//react components
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../assets/Qcapital.webp";
//commmon components
import ArrowDown from "../Commons/ArrowDown/ArrowDown";
//Framer motion
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
const Cursos = () => {
  // framer motion container  for make de stagger transition
  const target = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  // framer motion items animation
  const items = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0,
      },
    },
  };

  return (
    <>
      <Container
        fluid
        className={`${styles.container} max-vh-100 d-flex flex-column justify-content-around align-items-center`}
        id="target"
      >
        <h2>Par quien son nuestro cursos</h2>

        <Row className={`d-flex  w-100 `}>
          <Col xs={12} lg={6} className="d-flex justify-content-center">
            <img src={logo} className={`${styles.logo} img-fluid `} />
          </Col>

          <Col xs={12} md={12} lg={6} className={`d-flex `}>
            <Row className={`d-flex justify-content-center w-100 mt-md-5 mt-5`}>
              <Col
                xs={12}
                md={12}
                lg={6}
                className={`text-center ${styles.texto} d-flex flex-column justify-content-center `}
              >
                <p className={` ${styles.textos}`}>Sin experiencia</p>
                <motion.div
                  className="d-flex flex-column h-100 justify-content-around "
                  variants={target}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 1 }}
                >
                  <motion.p
                    variants={items}
                    className={` ${styles.textoDescripcion} text-center `}
                  >
                    <TiTick color=" FF0000" size={30} /> No es necesario que
                    tengas experiencia previa
                  </motion.p>
                  <motion.p
                    variants={items}
                    className={` ${styles.textoDescripcion} text-center `}
                  >
                    <TiTick color=" FF0000" size={30} /> No necesitas ningun
                    titulo de grado
                  </motion.p>
                  <motion.p
                    variants={items}
                    className={` ${styles.textoDescripcion} text-center `}
                  >
                    <TiTick color=" FF0000" size={30} /> Vas a comenzar de "Cero
                    a Pro"
                  </motion.p>
                </motion.div>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={6}
                className={`text-center mt-sm-5 mt-md-0 d-flex flex-column justify-content-center mt-4 mt-md-0 `}
              >
                <p className={` ${styles.textos}`}>Con experiencia</p>
                <motion.div
                  className="d-flex flex-column h-100 justify-content-around"
                  variants={target}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 1 }}
                >
                  <motion.p
                    className={` ${styles.textoDescripcion} mt-3 mt-md-0 text-center `}
                    variants={items}
                  >
                    <TiTick color=" FF0000" size={30} /> Mejoraras tu sistema de
                    trading
                  </motion.p>
                  <motion.p
                    className={` ${styles.textoDescripcion} mt-2 mt-md-0 text-center`}
                    variants={items}
                  >
                    <TiTick color=" FF0000" size={30} />
                    Aprenderas nuevas herramientas de solucion de problemas
                  </motion.p>
                  <motion.p
                    className={` ${styles.textoDescripcion} mt-4 mt-md-0 text-center`}
                    variants={items}
                  >
                    <TiTick color=" FF0000" size={30} />
                    Dominaras todos los mercados financieros como trader o
                    inversor
                  </motion.p>
                </motion.div>
              </Col>
            </Row>
          </Col>
          {/* <Row className="d-flex justify-content-end">
            <Col xs={12} lg={6} className="">
              <h2 className={`${styles.frase} text-end mt-5  mt-md-5  p-0`}>
                Unos meses de estudio, para una vida de Libertad
              </h2>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <motion.div
                className="d-flex justify-content-center mb-5"
                initial={{ y: -10 }}
                transition={{ duration: 2, repeat: Infinity }}
                animate={{ y: 50 }}
              >
                <ArrowDown />
              </motion.div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Cursos;
