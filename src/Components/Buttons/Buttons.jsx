import React from "react";
import { Link } from "react-router-dom";
import styles from "./buttons.module.css";
const Buttons = ({ title, destination }) => {
  return (
    <Link to={destination}>
      <button className={`${styles.btn} d-none`}>{title}</button>
    </Link>
  );
};

export default Buttons;
