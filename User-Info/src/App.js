import React, { useState } from "react";

import UserInput from "./Components/User/UserInput";
import UserItem from "./Components/User/UserItem";
import UserList from "./Components/User/UserList";
import Card from "./Components/Card/Card";
import "./App.css";

function App() {
  const [users, setUser] = useState([
    { name: "Abhishek", age: 23, id: Math.random().toString() },
    { name: "Sneha", age: 25, id: Math.random().toString() },
    { name: "Shubham", age: 25, id: Math.random().toString() },
  ]);

  // let content = (
  //   <Card>
  //     <p>No User data available.</p>
  //   </Card>
  // );

  // if (users.length > 0) {
  //   content = users.map((user) => <UserItem name={user.name} age={user.age} />);
  // }

  return (
    <div className="main">
      <div className="input">
        <Card>
          <UserInput />
        </Card>
      </div>
      <div className="output">
        <UserList items={users} />
      </div>
    </div>
  );
}

export default App;
