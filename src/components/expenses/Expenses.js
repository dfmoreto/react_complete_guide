import { useState } from "react"

import ExpensesFilter from "./ExpensesFilter"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"

import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const yearSelectHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={filteredYear}
          onYearSelect={yearSelectHandler}
        />

        { props.items.map(item =>
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        )}
      </Card>
    </div>
  )
}

export default Expenses
