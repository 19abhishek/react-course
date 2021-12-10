import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  // const [paragraphState, setParagraphState] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // console.log("App running");

  // const clickHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setParagraphState((currState) => !currState);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = () => {
  //   setAllowToggle((currToggle) => !currToggle);
  // };

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {/* <DemoOutput show={paragraphState} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={clickHandler}>Toggle Paragraph!</Button> */}
    </div>
  );
}

export default App;
