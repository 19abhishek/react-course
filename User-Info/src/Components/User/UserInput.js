import React, { useState, useRef } from "react";

import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
import Card from "../Card/Card.js";
import Wrapper from "../Helpers/Wrapper.js";
import "./UserInput.css";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  // const onNameChangeHandler = (e) => {
  //   setUserName(e.target.value);
  // };

  // const onAgeChangeHandler = (e) => {
  //   setUserAge(e.target.value);
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "An error occured",
        message: "Please enter input of length > 0.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "An error occured",
        message: "Age should be a positive integer.",
      });
      return;
    }
    const newUser = { name: enteredName, age: enteredAge };
    props.onAddUser(newUser);
    // setUserName("");
    // setUserAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            <input type="text" ref={nameInputRef} />
          </div>
          <div>
            <label>Age(Years)</label>
            <input type="number" ref={ageInputRef} />
          </div>
          <Button type="submit">Add User</Button>
        </Card>
      </form>
    </Wrapper>
  );
};

export default UserInput;
