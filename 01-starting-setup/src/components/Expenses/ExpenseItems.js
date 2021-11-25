import "./ExpenseItems.css";
import Date from "./Date";
import Card from "../UI/Card";

function ExpenseItems(props) {
  const clickHandler = () => {
    console.log("Hey");
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <Date date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Check!!</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
