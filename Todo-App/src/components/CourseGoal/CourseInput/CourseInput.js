import React, { useState } from "react";

import "./CourseInput.css";
import Button from "../../UI/Button.js";

const CourseInput = (props) => {
  const [enteredValue, setInputState] = useState("");

  const onChangeEventHandler = (e) => {
    setInputState(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={onChangeEventHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
