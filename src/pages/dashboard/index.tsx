import { Dispatch, useState } from "react";
import { AppState } from "../../redux/reducers";
import { useSelector, useDispatch } from 'react-redux';
import "./styles.css";
import ExpenseForm from "../../components/expenseForm";
import { ExpenseDataType } from "../../common/types/expensType";
import Expenses from "../../components/expenseContainer";
import { useNavigate } from 'react-router-dom'
import { ExpenseActions } from "../../redux/actions/ExpenseActions";

const Dashboard = () => {
  const [isEditting, setIsEditting] = useState(false);
  const navigate = useNavigate();
  const { expenses } = useSelector((state: AppState) => state.expenses);
  // fix ts warning
  // @ts-ignore
  const expenseDispatch = useDispatch<Dispatch<ExpenseActions>>();

  const saveExpenseDataHandler = (enteredExpenseDate: ExpenseDataType[]) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    expenseDispatch({type: 'ADD_EXPENSE', payload: expenseData});
    stopEdittingHandler();
  };

  const startEditingHandler = () => {
    setIsEditting(true);
  };

  const stopEdittingHandler = () => {
    setIsEditting(false);
  };

  const onPressChartView = () => navigate('/expenseChart')

  return (
    <div className="new-expense">
      {!isEditting && (
        <>
        <button onClick={startEditingHandler}>Add New Expense</button>
        <button onClick={onPressChartView}>Chart View</button>
        </>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
      {expenses && <Expenses items={expenses} showChart={false} />}

    </div>
  );
};

export default Dashboard;
