import { useState } from "react";
import "./styles.css";
import ExpenseForm from "../../components/expenseForm";
import { ExpenseDataType } from "../../common/types/expensType";
import Expenses from "../../components/expenseContainer";

const Dashboard = () => {
  const [expenses, setExpenses] = useState<ExpenseDataType[]>([]);
  const [isEditting, setIsEditting] = useState(false);

  const addExpenseHandler = (expense: ExpenseDataType) => {
    setExpenses((previousArray) => {
      return [expense, ...previousArray];
    });
  };

  const saveExpenseDataHandler = (enteredExpenseDate: ExpenseDataType) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
    stopEdittingHandler();
  };

  const startEditingHandler = () => {
    setIsEditting(true);
  };

  const stopEdittingHandler = () => {
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <>
        <button onClick={startEditingHandler}>Add New Expense</button>
        </>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
      <Expenses items={expenses} />
    </div>
  );
};

export default Dashboard;
