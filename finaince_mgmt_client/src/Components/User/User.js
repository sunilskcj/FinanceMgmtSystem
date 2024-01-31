import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import ExpenseTable from './Table/ExpenseTable/ExpenseTable';
import IncomeTable from './Table/IncomeTable/IncomeTable';
import './User.css';
import Footer from '../Footer/Footer';
function User(){
    return(
      <user>
        <ExpenseTable />
        <IncomeTable />
        <Footer />
  </user>
    )
}

export default User;