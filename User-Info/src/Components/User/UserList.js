import React from "react";

import UserItem from "./UserItem";
import Card from "../Card/Card";
import "./UserList.css";

const UserList = (props) => {
  const users = props.items;

  let content = <p>No User data available.</p>;

  if (users.length > 0) {
    content = users.map((user) => (
      <UserItem name={user.name} age={user.age} key={user.id} />
    ));
  }

  return (
    <div className="user-list">
      <Card>{content}</Card>
    </div>
  );
};

export default UserList;
