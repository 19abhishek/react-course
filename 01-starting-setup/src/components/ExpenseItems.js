import "./ExpenseItems.css";
import Date from "./Date";
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <Date date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
