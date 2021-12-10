import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [paragraphState, setParagraphState] = useState(false);
  console.log("App running");

  const clickHandler = useCallback(() => {
    setParagraphState((currState) => !currState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={clickHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
