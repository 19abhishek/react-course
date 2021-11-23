import "./ExpenseItems.css";

function ExpenseItems() {
  const date = new Date(2021, 11, 22);
  const type = "Car Insurance";
  const price = 294.67;
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{type}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
