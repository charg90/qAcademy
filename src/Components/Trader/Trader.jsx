import useVideos from "../../CustomHooks/useVideos";
import { Container, Row } from "react-bootstrap";

import styles from "./trader.module.css";
import { useState } from "react";
import Spinners from "../Commons/Spinner/Spinners";
const Trader = () => {
  const [videos, loading, error] = useVideos();
  const [index, setIndex] = useState(0);
  console.log(videos.length);
  const handleIndex = (e) => {
    e.target.name === "atras" ? setIndex(index - 1) : setIndex(index + 1);
  };

  return (
    <Container className="d-flex max-vh-100">
      <Row>
        {loading ? (
          <Spinners />
        ) : (
          <>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              {index > 0 && (
                <button
                  className={`${styles.btn}`}
                  name="atras"
                  onClick={(e) => handleIndex(e)}
                  disabled
                >
                  atras
                </button>
              )}
              <p className="text-white">{index + 1}</p>

              {index < videos.length - 1 && (
                <button
                  className={`${styles.btn}`}
                  name="siguiente"
                  onClick={(e) => handleIndex(e)}
                >
                  adelante
                </button>
              )}
            </div>
            <video
              controls
              className={`${styles.videoReproducer}`}
              src={videos[index]}
            />
          </>
        )}
      </Row>
    </Container>
  );
};

export default Trader;
