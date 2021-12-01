import React, { useState } from "react";

import Button from "../UI/Button.js";
import "./UserInput.css";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onNameChangeHandler = (e) => {
    if (userName.trim().length === 0) {
      console.log("enter valid name");
    }
    setUserName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    if (userAge < 0) {
      console.log("Enter valid age");
    }
    setUserAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newUser = { name: userName, age: userAge };
    props.onAddUser(newUser);
    setUserName("");
    setUserAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" value={userName} onChange={onNameChangeHandler} />
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="number" value={userAge} onChange={onAgeChangeHandler} />
      </div>
      <Button>Add User</Button>
    </form>
  );
};

export default UserInput;
