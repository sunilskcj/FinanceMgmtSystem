import { useState } from "react";
import "./User.css"
import Axios from "axios";
function User(){
  const url ="http://localhost:5244/api/Expenditure";
  const [data, setData]=useState({
    expenses:"",
    
    amount:"",
    notes:"",
    expenseDate:""
  });  

  function handle(e){
const newDate ={...data};
newDate[e.target.id]=e.target.value
setData(newDate);
console.log(newDate);
  }
function Submit(e){
e.preventDefault();
Axios.post(url,{
 
  expenses:data.expenses,
  amount:data.amount,
  expenseDate:data.expenseDate,
  notes:data.notes
})
.then(console.log(data))
};
    return(
        <addexpense>
        <h1 >Add New Expense</h1>
        <div className="formAdd"><br/>
        <form onSubmit={(e)=>Submit(e)}>
        <div className="form-row">
          <div className="form-group">
            <label for="expenses">Expense</label>
            <input onChange={(e)=> handle(e)} value={data.expenses} type="text" className="form-control" id="expenses"  />
          </div>
          <div className="form-group">
            <label for="Account">Account</label>
            <input onChange={(e)=> handle(e)} value={data.accountId} type="text" className="form-control" id="accountsId"  />
          </div>
          <div className="form-group">
          <label for="Amount">Amount</label>
          <input onChange={(e)=> handle(e)} value={data.amount} type="number" className="form-control" id="amount"  />
        </div>
        <div className="form-group">
          <label for="Notes">Notes</label>
          <input onChange={(e)=> handle(e)} value={data.notes} type="text" className="form-control" id="notes"  />
        </div>
        <div className="form-group">
          <label for="Date">Date</label>
          <input onChange={(e)=> handle(e)} value={data.expenseDate} type="date" className="form-control" id="expenseDate"  />
        </div>
        </div>
        
      <br/>
        <button type="submit" className="btn btn-primary">Add</button>
      </form></div>
        </addexpense>
    )
}

export default User;