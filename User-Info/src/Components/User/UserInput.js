import React from "react";

import Button from "../UI/Button.js";
import "./UserInput.css";

const UserInput = () => {
  const formSubmitHandler = () => {};
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="number" />
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default UserInput;
