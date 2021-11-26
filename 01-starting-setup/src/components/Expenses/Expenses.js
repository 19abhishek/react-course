import React, { useState } from "react";

import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function IndividualExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenses = props.expenses;
  // const mappedExpenses = expenses.map((expense) => (
  //   <ExpenseItems
  //     date={expense.date}
  //     title={expense.title}
  //     amount={expense.amount}
  //   />
  // ));
  const expenseYear = (currentYear) => {
    setFilteredYear(currentYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={expenseYear} />
        <ExpenseItems
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItems>
      </Card>
    </div>
  );
}

export default IndividualExpenses;
