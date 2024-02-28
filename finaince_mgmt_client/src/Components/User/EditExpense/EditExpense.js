import { useState, useEffect } from "react";
import "./EditExpense.css"
import Axios from "axios";
import moment from 'moment';
import { useParams } from 'react-router-dom';
function EditExpenses(){
    
    let date=new Date();
    const url ="http://localhost:5244/api/Expenditure";
    const [options, setOptions] = useState([]);
    const { id } = useParams();
    const [data, setData]=useState({
      expenses:"",
      expId:"",
      expenseType:0,
      amount:"",
      notes:"",
      expenseDate:"",
      category:"",
      accountsId:""
    });  
    const authToken = localStorage.getItem('authToken');
    const headers = {
      
      'Authorization': `Bearer ${authToken}`,
    };
    useEffect(() => {
      Axios.get(url+"/fetchById/"+id,{headers}).then((response) => {
          
        setData(response.data);
        console.log(response.data);
      }).catch(err=>console.log(err));
      const fetchData = async () => {
        try {
          const response = await Axios.get('http://localhost:5244/api/Accounts/');
          setOptions(response.data); 
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
   

    function handle(e){
  const newData ={...data};
  newData[e.target.id]=e.target.value
  setData(newData);    
  console.log(newData);
  }
  function Submit(e){
  e.preventDefault();
  Axios.put(url,{
    expId: data.expId,
    expenseType: data.expenseType,
    expenses:data.expenses,
    amount:data.amount,
    expenseDate:data.expenseDate,
    notes:data.notes,
    category:data.category,
    accountsID:data.accountsId
  },{headers})
  .then(console.log(data)).then(alert("Expenses Updated"))
  .catch(err=>console.log(err))
  };
      return(
          <div className="addexpense">
          <h5 >Update Expenditure</h5>
          <div className="formAdd">
          <form onSubmit={(e)=>Submit(e)}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expenses">Name</label>
              <input  value={data.expenses || ""} onChange={(e)=> handle(e)}  type="text" className="form-control" id="expenses"  />
            </div>
            <div className="form-group">
            <label htmlFor="accountsId">Account</label>
            <select className="form-control" id="accountsId" value={data.accountsId || ""} onChange={(e)=> handle(e)}>
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.accountsId} value={option.accountsId}>{option.accountName}</option>
      ))}
    </select>
          </div>
            <div className="form-group">
            <label htmlFor="category">Category</label>
            <input onChange={(e)=> handle(e)} value={data.category || ""} type="text" className="form-control" id="category"  />
          </div>
          <div className="form-group">
          <label htmlFor="expenseType">Expense Type</label>
          <select onChange={(e) => handle(e)} value={data.expenseType || ""} id="expenseType" className="form-control">
          <option value="2">Income</option>
          <option value="1" >Expense</option>
          </select>
        </div>
            <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input value = {data.amount || ""} onChange={(e)=> handle(e)}  type="number" className="form-control" id="amount"  />
          </div>
          
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <input value={data.notes || ""} onChange={(e)=> handle(e)} type="text" className="form-control" id="notes"  />
          </div>
          <div className="form-group">
            <label htmlFor="expenseDate">Dates</label>
            <input value={moment(data.expenseDate).format('YYYY-MM-DD') || ""} onChange={(e)=> handle(e)}  type="date" className="form-control" id="expenseDate"  />
          </div>
          </div>
          
        <br/>
          <button type="submit" className="btn btn-primary">Update</button>
        </form></div>
          </div>
      )
}

export default EditExpenses;