import React from "react";

import "./CourseInput.css";
import Button from "../../UI/Button.js";

const CourseInput = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form_input">
        <div className="text">Course Goal</div>
        <input type="text" />
      </div>
      <Button type="submit" />
    </form>
  );
};

export default CourseInput;
