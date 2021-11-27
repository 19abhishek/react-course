import React from "react";

import "./ExpenseItems.css";
import Date from "./Date";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log("hey");
  // const clickHandler = () => {
  //   setTitle("Update!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title!</button> */}
    </Card>
  );
};

export default ExpenseItems;
