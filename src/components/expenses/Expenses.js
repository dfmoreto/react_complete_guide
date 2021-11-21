import { useState } from "react"

import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import Card from "../UI/Card"

import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const yearSelectHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredItems = props.items.filter(item =>
    item.date.getFullYear().toString() === filteredYear
  )

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          year={filteredYear}
          onYearSelect={yearSelectHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </li>
  )
}

export default Expenses
