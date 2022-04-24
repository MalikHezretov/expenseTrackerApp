import {useState} from "react"
import "./styles.css"
import ExpenseCard from "../expenseCard"
import ExpensesList from "../expenseList"
import ExpensesFilter from "../expenseFilter"
import { ExpenseDataType } from "../../common/types/expensType"
import ExpensesChart from "../chartContainer"

interface Props {
    items: ExpenseDataType[]
    showChart: boolean
}

const Expenses = (props: Props) => {
  const {items, showChart} = props
  const [filteredYear, setFilteredYear] = useState<string>("2022")

  const filterChangeHandler = (date: string) => {
    setFilteredYear(date)
  }

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  
  return (
    <>
      <ExpenseCard className="expenses">
        <>
          <ExpensesFilter
            selected={filteredYear}
            onFilterChange={filterChangeHandler}
          />
          {showChart && (<ExpensesChart expenses={filteredExpenses} />)}
          {!showChart && (<ExpensesList items={filteredExpenses} /> )}
        </>
      </ExpenseCard>
    </>
  )
}

export default Expenses
