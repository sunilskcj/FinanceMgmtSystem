import { useState, useEffect } from "react";
import "./AddExpenses.css"
import Axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function AddExpenses() {

  let date = new Date();
  const [options, setOptions] = useState([]);
  const url = "http://localhost:5244/api/Expenditure/";
  const [data, setData] = useState({
    expenses: "",

    expenseType: 0,
    amount: "",
    notes: "",
    expenseDate: "",
    category: "",
    accountsId: ""
  });
  const authToken = localStorage.getItem('authToken');
  const headers = {

    'Authorization': `Bearer ${authToken}`,
  };
  useEffect(() => {
    const fetchData = async () => {
      Axios.get('http://localhost:5244/api/Accounts/', { headers })
        .then((response) => {
          setOptions(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);

        })

    }
    fetchData();
  }, []);



  function handle(e) {
    const newDate = { ...data };
    newDate[e.target.id] = e.target.value
    setData(newDate);
    console.log(newDate);
  }
  const Submit =  (e) =>  {

    e.preventDefault();
    console.log(data);
   

      Axios.post(url, {
        expenseType: data.expenseType,
        expenses: data.expenses,
        amount: data.amount,
        expenseDate: data.expenseDate,
        notes: data.notes,
        category: data.category,
        accountsId: data.accountsId
      }, { headers }) 
      
        .then((res) => console.log(res))
        
    
  };
  return (
    <div className="addexpense">
      <h5 >Add New</h5>
      <div className="formAdd">
        <form onSubmit={(e) => Submit(e)}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expenses">Name</label>
              <input onChange={(e) => handle(e)} value={data.expenses} type="text" className="form-control" id="expenses" />
            </div>
            <div className="form-group">
              <label htmlFor="accountsId">Account</label>
              <select className="form-control" id="accountsId" value={data.accountsId} onChange={(e) => handle(e)}>
                <option value="">Select...</option>
                {options.map((option) => (
                  <option key={option.accountsId} value={option.accountsId}>{option.accountName}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input onChange={(e) => handle(e)} value={data.category} type="text" className="form-control" id="category" />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input onChange={(e) => handle(e)} value={data.amount} type="number" className="form-control" id="amount" />
            </div>
            <div className="form-group">
              <label htmlFor="expenseType">Expense Type</label>
              <select onChange={(e) => handle(e)} id="expenseType" className="form-control">
                <option value="">Select </option>
                <option value="2">Income</option>
                <option value="1" >Expense</option>

              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Notes">Notes</label>
              <input onChange={(e) => handle(e)} value={data.notes} type="text" className="form-control" id="notes" />
            </div>
            <div className="form-group">
              <label htmlFor="Date">Date</label>
              <input onChange={(e) => handle(e)} value={data.expenseDate} type="date" className="form-control" id="expenseDate" />
            </div>
          </div>

          <br />
          <button type="submit" className="btn btn-primary">Add</button>
        </form></div>
    </div>
  )
}

export default AddExpenses;