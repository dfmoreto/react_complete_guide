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

  const filteredItems = props.items.filter(item =>
    item.date.getFullYear().toString() === filteredYear
  )

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={filteredYear}
          onYearSelect={yearSelectHandler}
        />

        { filteredItems.map(item =>
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
