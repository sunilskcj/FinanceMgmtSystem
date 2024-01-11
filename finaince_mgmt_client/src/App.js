
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create_User from './Components/create-user/create-user';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LoginUser from './Components/LoginUser/LoginUser';
import User from './Components/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      
      <Route exact path='/' element={<User />} ></Route>
      <Route path='/createUser' element={<Create_User />} ></Route>
      <Route path='/login' element={<LoginUser />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
