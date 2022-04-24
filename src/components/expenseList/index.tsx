import { ExpenseDataType } from "../../common/types/expensType";
import ExpenseRow from "../expenseRow";
import './styles.css'

interface Props {
    items: ExpenseDataType[]
}

const ExpensesList = ({items}: Props) => {
  if (items.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
      {items.map((expense) => (
      <ExpenseRow
        name={expense.name}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ))}
  </ul>
}

export default ExpensesList;