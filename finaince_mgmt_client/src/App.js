
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create_User from './Components/create-user/create-user';

import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LoginUser from './Components/LoginUser/LoginUser';
import User from './Components/User/User';


function App() {
  let nbsp = "\u00A0"
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <LoginUser />} />
        <Route exact path='user/*' element={ <User />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
