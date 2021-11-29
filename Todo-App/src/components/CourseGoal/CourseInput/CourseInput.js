import React, { useState } from "react";

import "./CourseInput.css";
import Button from "../../UI/Button.js";

const CourseInput = (props) => {
  const [enteredValue, setInputState] = useState("");
  const [isValid, setValid] = useState(true);

  const onChangeEventHandler = (e) => {
    if (enteredValue.length > 0) {
      setValid(true);
    }
    setInputState(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          style={{ borderColor: isValid ? "black" : "red" }}
          type="text"
          onChange={onChangeEventHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
