import { BrowserRouter, Route,  Routes } from 'react-router-dom';


import AddExpenses from './AddExpenses/AddExpenses';
import './User.css';

import UserNavbar from './UserNavbar/UserNavbar';
import Dashboard from './Dashboard/Dashboard';
import EditExpenses from './EditExpense/EditExpense';
function User(){
    return(
      <div className='User'>
      <BrowserRouter>
<UserNavbar />
<Routes>
<Route exact path='/view' element={<Dashboard />}/>
<Route path='/add' element={<AddExpenses />}/>
<Route path='/view/:id' element={<EditExpenses />}/>
</Routes>
</BrowserRouter>

      
  </div>
    )
}

export default User;