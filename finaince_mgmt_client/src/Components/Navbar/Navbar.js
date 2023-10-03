import { Link } from 'react-router-dom';
import './Navbar.css';

this.state = {isActive:false};
toggle=()=>{this.setState(prevState => ({ isActive: !prevState.isActive }))}
function Navbar(){
  const {isActive}=this.state;
    return(
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" >Banking</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <a class="navbar-toggler-icon"></a>
    </button>
    </div>
    <div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">   
        <li class="nav-item">
          <Link className={`box ${isActive ? "nav-link" : "nav-link active"}`} to='/' style={{textDecoration:'none'}}><a class="nav-link active" onClick={this.toggle} >Home</a></Link>
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