import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar(){

    return(
      
      <div class="adbd">
      <nav class="navbar navbar-light " >
         <div class="container-fluid">
           
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:"#F8F8F8"}}>
             <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Finance Manager</h5>
               <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
             <div class="offcanvas-body" >
               <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                 <li class="nav-item">
                   <a class="nav-link " aria-current="page" href="user/dash">DashBoard</a>
                 </li>
                 
                <li   class="nav-item">
                  <a class="nav-link " aria-current="page" href="user/profile">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="user/payee">Add Expenses</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="user/changepassword">Change Password</a>
                </li>
                 <li class="nav-item">
                   <a class="nav-link" href="/">Logout</a>
                 </li>
                 
                   </ul>
                 
              
              
             </div>
           </div>
           <a class="navbar-brand" href="#">Finance Manager</a>
           </div> 
         
       </nav>
       
       </div>
       );
}

export default Navbar;