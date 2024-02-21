import { useEffect } from 'react'
import { getAllExpenseItems } from '../services/service'
import { ExpenseItemlLister } from './ExpenseItemlLister'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ExpenseCreator } from "./ExpenseCreator";
import { ExpenseSummary } from "./ExpenseSummary";
import './Expense.css'

const ExpenseTrackerApp = () => {

  const [expenseItems, setExpenseItems] = useState([]);

  useEffect(() => {

    const getAllExpenseItemsInvoker = async () => {
      const response = await getAllExpenseItems();
      console.log("Expense Items: ")
      console.log(JSON.stringify(response))

      setExpenseItems(response);
    }

    getAllExpenseItemsInvoker();
  }, [])

  return (
    <Container>
      <h2>Expense Items</h2>
      <ExpenseCreator expenseItems={expenseItems} ></ExpenseCreator>

      <hr />

      <ExpenseItemlLister expenseItems={expenseItems}></ExpenseItemlLister>

      <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>
    </Container>
  )
}

export default ExpenseTrackerApp
