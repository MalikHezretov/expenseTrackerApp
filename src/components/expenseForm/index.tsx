import "./styles.css";
import { useState } from "react";
import { ExpenseData } from "../../common/types/expensType";

interface Props {
    onSaveExpenseData: (expenseData: ExpenseData) => void
    onCancel: () => void
}

const ExpenseForm = (props: Props) => {
  const {onSaveExpenseData, onCancel} = props
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const nameChangeHandler = (e: any) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e: any) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  };

  const dateChangeHandler = (e: any) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
  };


  const submitHandler = (e: any) => {
    e.preventDefault();
    const expenseData = {
      name: userInput.enteredName,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpenseData(expenseData);
    setUserInput({
      enteredName: "",
      enteredAmount: "",
      enteredDate: "",
    });
    onCancel();
  };

 return  (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={userInput.enteredName}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
 )
};

export default ExpenseForm;
