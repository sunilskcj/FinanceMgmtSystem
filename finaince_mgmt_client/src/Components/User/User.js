import { BrowserRouter, Route,  Routes } from 'react-router-dom';


import AddExpenses from './AddExpenses/AddExpenses';
import './User.css';

import UserNavbar from './UserNavbar/UserNavbar';
import Dashboard from './Dashboard/Dashboard';
function User(){
    return(
      <div className='User'>
      <BrowserRouter>
<UserNavbar />
<Routes>
<Route exact path='/view' element={<Dashboard />}/>
<Route path='/add' element={<AddExpenses />}/>
</Routes>
</BrowserRouter>

      
  </div>
    )
}

export default User;