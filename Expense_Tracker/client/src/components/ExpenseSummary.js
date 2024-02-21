import { getTotalExpenseByPayee, getGrandTotal, getPendingAmount, getAllPayeeNames } from "../services/service-utils"

import Table from 'react-bootstrap/Table';
import './Expense.css'

const ExpenseSummary = ({ expenseItems }) => {

  const payeeNames = getAllPayeeNames(expenseItems);

  function expenseSummaryTable() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Payee</th>
            <th>Total Contributed Amount</th>
            <th>Pending Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            payeeNames.map((payeeName, index) => {

              return (

                <tr>
                  <td>{index + 1}</td>
                  <td>{payeeName}</td>
                  <td>{getTotalExpenseByPayee(expenseItems, payeeName)}</td>
                  <td>{getPendingAmount(expenseItems, payeeName)}</td>
                </tr>

              )
            })
          }

          <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{getGrandTotal(expenseItems)}</td>
            <td></td>
          </tr>

        </tbody>
      </Table>
    );
  }

  return (
    <div>

      <h2 class="expSummary">Expense Summary</h2>
      {
        expenseSummaryTable()
      }

    </div>
  )
}

export { ExpenseSummary }