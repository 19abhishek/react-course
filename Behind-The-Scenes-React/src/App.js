import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [paragraphState, setParagraphState] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("App running");

  const clickHandler = useCallback(() => {
    if (allowToggle) {
      setParagraphState((currState) => !currState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((currToggle) => !currToggle);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraphState} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={clickHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
