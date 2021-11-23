import "./ExpenseItems.css";
import Date from "./Date";

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <Date date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
