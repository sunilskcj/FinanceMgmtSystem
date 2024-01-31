
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create_User from './Components/create-user/create-user';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LoginUser from './Components/LoginUser/LoginUser';
import User from './Components/User/User';
import AddExpenses from './Components/User/AddExpenses/AddExpenses';

function App() {
  let nbsp = "\u00A0"
  return (
  <div className='App'>
  <BrowserRouter>
<Navbar />
<Routes>
<Route exact path='/view' element={<User />}/>
<Route path='/add' element={<AddExpenses />}/>
</Routes>
</BrowserRouter>


  </div>
    
  );
}

export default App;
