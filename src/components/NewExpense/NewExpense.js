import { useState } from "react"

import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"

const NewExpense = (props) => {
  const [openedForm, setOpenedForm] = useState(false)

  const openFormHandler = () => {
    setOpenedForm(true)
  }

  const closeFormHandler = () => {
    setOpenedForm(false)
  }

  const saveExpanseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    closeFormHandler()
  }

  if(!openedForm) {
    return (
      <div className="new-expense">
        <button type="submit" onClick={openFormHandler}>Add Expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpanseDataHandler}
        onCancel={closeFormHandler}
      />
    </div>
  )
}

export default NewExpense
