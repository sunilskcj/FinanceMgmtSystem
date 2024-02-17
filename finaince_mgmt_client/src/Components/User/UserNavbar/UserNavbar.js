import { Link } from 'react-router-dom';
import './UserNavbar.css';



function UserNavbar(){
  let nbsp = "\u00A0"
    return(
      
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white " style={{height:'100vh',width:'300px',position:'-webkit-sticky',position:'sticky',top:'0',backgroundColor:'#fff'}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
       
        <span className="fs-5">Finance Management</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
         <Link to='/'  className="nav-link text-dark" aria-current="page">
         
            Home
          </Link>
        </li>
        <li>
          <Link to='/view' className="nav-link text-dark">
          
            Dashboard
          </Link>
        </li>
        <li>
        <Link to='/add' className="nav-link text-dark">
          
          Add Expense
        </Link>
      </li>
     
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://www.hdwallpapers.in/download/mac_miller_is_wearing_blue_jacket_and_black_goggles_in_a_blur_background_hd_celebrities-HD.jpg" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Profile</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-light text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
    </div>
    
       );
}

export default UserNavbar;