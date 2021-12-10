import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [paragraphState, setParagraphState] = useState(false);
  console.log("Paragraph running");

  const clickHandler = () => {
    setParagraphState((currState) => (currState = !currState));
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraphState} />
      <Button onClick={clickHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
