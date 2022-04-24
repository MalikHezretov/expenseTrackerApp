import {useState} from "react"
import "./styles.css"
import ExpenseCard from "../expenseCard"
import ExpensesList from "../expenseList"
import ExpensesFilter from "../expenseFilter"
import { ExpenseDataType } from "../../common/types/expensType"

interface Props {
    items: ExpenseDataType[]
}

const Expenses = (props: Props) => {
  const [filteredYear, setFilteredYear] = useState<string>("2022")

  const filterChangeHandler = (date: any) => {
    setFilteredYear(date)
  }

  const filteredExpenses = props.items.filter((expense) => {
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
          <ExpensesList items={filteredExpenses} /> 
        </>
      </ExpenseCard>
    </>
  )
}

export default Expenses
