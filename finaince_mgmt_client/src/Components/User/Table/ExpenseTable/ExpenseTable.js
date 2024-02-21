import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";
import "./ExpenseTable.css"
import { Link } from 'react-router-dom';
function ExpenseTable() {
  let nbsp = "\u00A0"
    const baseURL="http://localhost:5244/api/Expenditure"
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            
          setPost(response.data);
          
        });
      }, []);
      const [open, setOpen] = useState(false);

      const handleOpen = () => {
        setOpen(!open);
      };
  
     
    function deleteExpense(id){

      axios.delete(baseURL+"/"+id).then(console.log(id))
           .then(post.filter((p)=> p.expId !== id) ).then(setPost(post))
           .then(alert("Deleted Expenses"))
           
    }
      if(post == null) return null;
  return (
    <div className='expenseTable'>

 
   <table className="table">
   

      <thead>
        <tr  >
            
            <th scope="col">Expense Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Notes</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
        </tr>
        </thead>
        {post.map((exp)=><tbody key={exp.expId} >
        <tr >
         
         <td  scope="row" ><Link  className="nav-link text-dark" to={''+exp.expId} >{exp.expenses}</Link></td>
         <td scope="row">₹<b>{exp.amount}</b></td>
         <td scope="row">{exp.notes}</td>
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