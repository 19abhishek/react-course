import React from "react";

import Card from "./Card";
import useCounter from "../hooks/useCounter";

const BackwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
