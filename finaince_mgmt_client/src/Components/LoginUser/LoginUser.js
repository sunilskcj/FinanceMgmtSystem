import './LoginUser.css';
function LoginUser() {
    return(
        <div className="container">
       
    <h4>Login to your Account</h4><br />
    <form >
        <input type="radio" name="radioCalc" id="radioAdd"  />&nbsp;User&nbsp;&nbsp;
        <input type="radio" name="radioCalc" id="radioSub"  />&nbsp;Admin<br />
        <div>
          <label for="customerId">User ID </label> &nbsp;
           <input name="customerId" type="number" class="form" id="customerId" formControlName="customerId"/><br /><br />
        </div>
        
        <div>
         <label for="Password">Password </label>&nbsp;
         <input name="netBankingPassword" type="password" class="password" id="password" formControlName="netBankingPassword" /><br /><br />
        </div>
        <button class="btn btn-primary" type="submit" >Login</button><br /><br />
    </form>

<div>
   <a routerLink="/register"><h5>First Time User ? Register</h5><br /></a> 
   <a routerLink="/forgetpassword"><h5>Forget User ID</h5><br /></a>
    <a routerLink="/forgetpassword"><h5>Forget Password</h5><br /></a>
</div>

    </div>
    );
}

export default LoginUser;