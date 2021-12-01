import React, { useState } from "react";

import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
import Card from "../Card/Card.js";
import Wrapper from "../Helpers/Wrapper.js";
import "./UserInput.css";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const onNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "An error occured",
        message: "Please enter input of length > 0.",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "An error occured",
        message: "Age should be a positive integer.",
      });
      return;
    }
    const newUser = { name: userName, age: userAge };
    props.onAddUser(newUser);
    setUserName("");
    setUserAge("");
  };

  const submitHandler = () => {
    setError();
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={submitHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <Card>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={onNameChangeHandler}
            />
          </div>
          <div>
            <label>Age(Years)</label>
            <input
              type="number"
              value={userAge}
              onChange={onAgeChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </Card>
      </form>
    </Wrapper>
  );
};

export default UserInput;
