import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newExpense, updateExpense] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onSaveExpense(expenseData);
    updateExpense(false);
  };

  const addClickHandler = () => {
    // newExpense = <ExpenseForm onSaveExpenseData={saveExpenseData} />;
    updateExpense(true);
  };

  const closeClickHandler = () => {
    updateExpense(false);
  };

  return (
    <div className="new-expense">
      {!newExpense && (
        <button type="submit" onClick={addClickHandler}>
          Add Expense
        </button>
      )}{" "}
      {newExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCloseClick={closeClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
