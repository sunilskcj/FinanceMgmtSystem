import { useState } from "react";
import "./AddExpenses.css"
import Axios from "axios";
function AddExpenses(){
    
    let date=new Date();
    const url ="http://localhost:5244/api/Expenditure";
    const [data, setData]=useState({
      expenses:"",
      expenseType:"",
      amount:"",
      notes:"",
      expenseDate:""
    });  

    function handle(e){
  const newDate ={...data};
  newDate[e.target.id]=e.target.value
  setData(newDate);
  console.log(data);
  }
  function Submit(e){
  e.preventDefault();
  Axios.post(url,{
    expenseType: data.expenseType,
    expenses:data.expenses,
    amount:data.amount,
    expenseDate:data.expenseDate,
    notes:data.notes
  })
  .then(console.log(data)).then(alert("Added Expenses"))
  };
      return(
          <div className="addexpense">
          <h5 >Add New</h5>
          <div className="formAdd">
          <form onSubmit={(e)=>Submit(e)}>
          <div className="form-row">
            <div className="form-group">
              <label for="expenses">Name</label>
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
            <label for="expenseType">Expense Type</label>
            <select onChange={(e) => handle(e)} id="expenseType" className="form-control">
            <option value="0">Income</option>
            <option value="1" >Expense</option>
            <option selected value="">Null</option>
            </select>
          </div>
          <div className="form-group">
            <label for="Notes">Notes</label>
            <input onChange={(e)=> handle(e)} value={data.notes} type="text" className="form-control" id="notes"  />
          </div>
          <div className="form-group">
            <label for="Date">Date</label>
            <input onChange={(e)=> handle(e)} value={data.expenseDate} type="date"  className="form-control" id="expenseDate"  />
          </div>
          </div>
          
        <br/>
          <button type="submit" className="btn btn-primary">Add</button>
        </form></div>
          </div>
      )
}

export default AddExpenses;