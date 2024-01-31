import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import ExpenseTable from './Table/ExpenseTable/ExpenseTable';
import IncomeTable from './Table/IncomeTable/IncomeTable';
import './User.css';
function User(){
    return(
      <user>
        <ExpenseTable />
  
  </user>
    )
}

export default User;