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
        className={`${styles.container} d-flex flex-column justify-content-around align-items-center `}
        id="target"
      >
        <h2>Par quien son nuestro cursos</h2>

        <Row className={`${styles.rowTarget} d-flex  w-100`}>
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={logo} className={`${styles.logo} img-fluid `} />
          </Col>

          <Col xs={12} md={12} lg={6} className={`d-flex `}>
            <Row className={`d-flex justify-content-center w-100 mt-md-5 mt-5`}>
              <Col
                xs={12}
                md={12}
                lg={6}
                className={` ${styles.texto} d-flex flex-column justify-content-center  mb-xss-4 `}
              >
                <p className={` ${styles.textos} text-center`}>
                  Sin experiencia
                </p>
                <motion.div
                  className="d-flex flex-column h-100 justify-content-around  "
                  variants={target}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 1 }}
                >
                  <motion.div
                    variants={items}
                    className="d-flex justify-content-center     "
                  >
                    <div>
                      <TiTick
                        color=" FF0000"
                        size={40}
                        className={`${styles.svgTarget}`}
                      />
                    </div>
                    <p
                      variants={items}
                      className={` ${styles.textoDescripcion}     `}
                    >
                      No es necesario que tengas experiencia previa
                    </p>
                  </motion.div>
                  <motion.div
                    variants={items}
                    className="d-flex  justify-content-center "
                  >
                    <div>
                      <TiTick
                        color=" FF0000"
                        size={40}
                        className={`${styles.svgTarget}`}
                      />
                    </div>
                    <p className={` ${styles.textoDescripcion}   `}>
                      No necesitas ningun titulo de grado
                    </p>
                  </motion.div>
                  <motion.div
                    variants={items}
                    className="d-flex justify-content-center  "
                  >
                    <div>
                      <TiTick
                        color=" FF0000"
                        size={40}
                        className={`${styles.svgTarget}`}
                      />
                    </div>
                    <p className={` ${styles.textoDescripcion}  `}>
                      Vas a comenzar de "Cero a Pro"
                    </p>
                  </motion.div>
                </motion.div>
              </Col>
              <Col
                xs={12}
                md={12}
                lg={6}
                className={` mt-sm-5 mt-md-0 d-flex flex-column justify-content-center  mt-md-0 `}
              >
                <p className={` ${styles.textos} text-center`}>
                  Con experiencia
                </p>
                <motion.div
                  className={`${styles.textContainer} d-flex flex-column h-100 justify-content-around`}
                  variants={target}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 1 }}
                >
                  <motion.div
                    variants={items}
                    className={`${styles.textContainer} d-flex  justify-content-center  `}
                  >
                    <div>
                      <TiTick
                        size={40}
                        color=" FF0000"
                        className={`${styles.svgTarget}`}
                      />
                    </div>
                    <p className={` ${styles.textoDescripcion}  mt-md-0  `}>
                      Mejoraras tu sistema de trading
                    </p>
                  </motion.div>
                  <motion.div
                    variants={items}
                    className="d-flex justify-content-center  "
                  >
                    <div>
                      <TiTick
                        size={40}
                        color=" FF0000"
                        className={`${styles.svgTarget}`}
                      />
                    </div>
                    <p className={` ${styles.textoDescripcion}  mt-md-0 `}>
                      Aprenderas nuevas herramientas de solucion de problemas
                    </p>
                  </motion.div>
                  <motion.div
                    variants={items}
                    className="d-flex justify-content-center "
                  >
                    <div>
                      <TiTick
                        size={40}
                        color=" FF0000"
                        className={`${styles.svgTarget}`}
                      />
                    </div>

                    <p className={` ${styles.textoDescripcion} mb-0 `}>
                      Dominaras todos los mercados financieros como trader o
                      inversor
                    </p>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Col>

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
