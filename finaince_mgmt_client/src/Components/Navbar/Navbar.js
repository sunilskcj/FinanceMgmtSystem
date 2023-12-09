import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar(){

    return(
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" >Money Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <a class="navbar-toggler-icon"></a>
    </button>
    </div>
    <div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">   
        <li class="nav-item">
          <Link to='/' style={{textDecoration:'none'}}><a class="nav-link active"  >Home</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/createUser' style={{textDecoration:'none',whiteSpace:'nowrap'}}><a class="nav-link" >Create Account</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/login' style={{textDecoration:'none'}}><a class="nav-link" >Login</a></Link>
        </li>
        
        <li class="nav-item">
        <Link to='/about' style={{textDecoration:'none'}}><a class="nav-link" >Register</a></Link>
        </li>
        
      </ul> 
    </div>
  </div>
</nav>
        
       );
}

export default Navbar;