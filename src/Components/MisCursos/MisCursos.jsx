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
        <Row className=" vw-100 d-flex align-items-center  ">
          {userData.trader && (
            <Col sm={12} md={4} className="text-center p-0 ">
              <Link to="/userHome/trader">
                <Button className={`${styles.btnMiscursos} `}>Trader</Button>
              </Link>
            </Col>
          )}
          {userData.inverBur && (
            <Col sm={12} md={4} className="text-center p-0">
              <Link to="/userHome/inversorBursatil">
                <Button className={`${styles.btnMiscursos}`}>
                  {" "}
                  Inversion Bursatil
                </Button>
              </Link>
            </Col>
          )}
          {userData.combo && (
            <Col sm={12} md={4} className="text-center p-0 ">
              <Link to="/userHome/combo">
                <Button className={`${styles.btnMiscursos}`}> Combo</Button>
              </Link>
            </Col>
          )}
        </Row>
      )}
    </>
  );
};

export default MisCursos;
