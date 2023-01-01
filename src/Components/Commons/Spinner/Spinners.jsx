import React from "react";
import { LineWave } from "react-loader-spinner";
const Spinners = () => {
  return (
    <LineWave
      height="300"
      width="300"
      color="#4fa94d"
      ariaLabel="line-wave"
      firstLineColor="cyan"
      middleLineColor="red"
      lastLineColor="cyan"
    />
  );
};

export default Spinners;
