import "./styles.css";
import ExpenseCard from "../expenseCard"
import ExpenseDate from "../expenseDate";

interface Props {
    date: Date
    name: string
    amount: number
}

const ExpenseItem = (props: Props) => {
  const {name, date, amount} = props 
  return (
    <li>
      <ExpenseCard className="expense-item">
        <>
            <ExpenseDate date={date} />
            <div className="expense-item__description">
            <h2>{name}</h2>
            </div>
            <div className="expense-item__price">{amount}</div>
        </>
      </ExpenseCard>
    </li>
  );
}

export default ExpenseItem;
