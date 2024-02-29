import Table from 'react-bootstrap/Table';
import { useState, useEffect, useReducer } from "react";
import moment from 'moment';
import axios, { AxiosHeaders } from "axios";
import "./ExpenseTable.css"
import { Link } from 'react-router-dom';
function ExpenseTable() {
  let nbsp = "\u00A0"
    const baseURL="http://localhost:5244/api/Expenditure"
    const [reducer, forceUpdate]=useReducer(x=>x+1,0);
    const [post, setPost] = useState(null);
    const [open, setOpen] = useState(false);
    const authToken = localStorage.getItem('authToken');
    const headers = {
      
      'Authorization': `Bearer ${authToken}`,
    };
    useEffect(() => {
        axios.get(baseURL,{ headers }).then((response) => {
            
          setPost(response.data);
          
        }).catch(err=>console.log(err));
      }, [reducer]);
      
      const handleOpen = () => {
        setOpen(!open);
      };
  
     
    async function deleteExpense(id){

      await axios.delete(baseURL+"/"+id,{headers}).then(console.log(id))
          
          
           forceUpdate()    
    }
      if(post === null) return null;
  return (
    <div className='expenseTable'>

 
   <table className="table">
   

      <thead>
        <tr  >
            
            <th scope="col">Expense Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
        </tr>
        </thead>
        {Object.keys(post).length>0 && post.map((exp)=><tbody key={exp.expId} >
        <tr >
         
         <td  scope="row" ><Link  className="nav-link text-dark" to={''+exp.expId} >{exp.expenses}</Link></td>
         <td scope="row">{exp.category}</td>
         <td scope="row">₹<b>{exp.amount}</b></td>
        
         <td scope="row" style={{fontSize:'14px'}}>{moment(exp.expenseDate).format('DD-MMM-YYYY')}</td>
         <td scope="row">
         <button type="button" onClick={(e)=>deleteExpense(exp.expId)} className="btn btn-danger">Delete</button>
         </td>
        </tr>
        </tbody>)}
    </table>
    
   </div>
  )}

  export default ExpenseTable;