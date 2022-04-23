import React, { useState } from "react";
import "./styles.css";
import ExpenseForm from "../../components/expenseForm";
import { ExpenseData } from "../../common/types/expensType";

interface Props {
    onAddExpense: (expenseData: ExpenseData) => void
}

const Dashboard = (props: Props) => {
  const {onAddExpense} = props
  const saveExpenseDataHandler = (enteredExpenseDate: any) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    stopEdittingHandler();
  };

  const [isEditting, setIsEditting] = useState(false);

  const startEditingHandler = () => {
    setIsEditting(true);
  };

  const stopEdittingHandler = () => {
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
};

export default Dashboard;
