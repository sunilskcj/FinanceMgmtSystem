import { BrowserRouter, Route,  Routes } from 'react-router-dom';


import AddExpenses from './AddExpenses/AddExpenses';
import './User.css';

import UserNavbar from './UserNavbar/UserNavbar';
import Dashboard from './Dashboard/Dashboard';
import EditExpenses from './EditExpense/EditExpense';
import PieChart from './Charts/PieChart';
import UserHome from './UserHome/UserHome';

function User(){
    return(
      <div className='User'>
  
<UserNavbar />
<Routes>
<Route path='/home' element={<UserHome />}/>
<Route path='/view' element={<Dashboard />}/>
<Route path='/add' element={<AddExpenses />}/>
<Route path='/view/:id' element={<EditExpenses />}/>
</Routes>


      
  </div>
    )
}

export default User;