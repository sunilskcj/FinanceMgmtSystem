import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import ExpenseTable from './Table/ExpenseTable/ExpenseTable';
import IncomeTable from './Table/IncomeTable/IncomeTable';
function User(){
    return(
      <div>
  <ExpenseTable />
  <IncomeTable />
  </div>
    )
}

export default User;