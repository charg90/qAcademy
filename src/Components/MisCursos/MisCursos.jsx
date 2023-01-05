import styles from "./miscursos.module.css";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUserData from "../../CustomHooks/useUserData";

import Spinners from "../Commons/Spinner/Spinners";
const MisCursos = () => {
  const [userData, loading] = useUserData();
  console.log(userData);

  return (
    <>
      {loading ? (
        <Spinners />
      ) : (
        <Row className="d-flex text-white align-items-center justify-content-around vw-100">
          <Col sm={12} lg={4} className="text-center h-75">
            <Link to="/userHome/trader">
              <Button className={`${styles.btnMiscursos} `}>Trader</Button>
            </Link>
          </Col>
          <Col sm={12} lg={4} className="text-center h-75">
            <Link to="/userHome/inversorBursatil">
              <Button className={`${styles.btnMiscursos}`}>
                {" "}
                Inversion Bursatil
              </Button>
            </Link>
          </Col>
          <Col sm={12} lg={4} className="text-center h-75">
            <Link to="/userHome/combo">
              <Button className={`${styles.btnMiscursos}`}> Combo</Button>
            </Link>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MisCursos;
