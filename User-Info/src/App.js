import React, { useState } from "react";

import UserInput from "./Components/User/UserInput";
import UserList from "./Components/User/UserList";

import "./App.css";

function App() {
  // const [users, setUser] = useState([
  //   { name: "Abhishek", age: 23, id: Math.random().toString() },
  //   { name: "Sneha", age: 25, id: Math.random().toString() },
  //   { name: "Shubham", age: 25, id: Math.random().toString() },
  // ]);

  const [users, setUser] = useState([]);

  const addUserHandler = (userInfo) => {
    const newUser = {
      name: userInfo.name,
      age: userInfo.age,
      id: Math.random().toString(),
    };
    setUser((prevUsers) => {
      const nUser = [...prevUsers];
      nUser.unshift(newUser);
      return nUser;
    });
  };

  return (
    <div className="main">
      <div className="input">
        <UserInput onAddUser={addUserHandler} />
      </div>
      <div className="output">
        <UserList items={users} />
      </div>
    </div>
  );
}

export default App;
