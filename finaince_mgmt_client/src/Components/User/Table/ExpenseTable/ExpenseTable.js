import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import moment from 'moment';
import axios from "axios";
import "./ExpenseTable.css"

function ExpenseTable() {
  let nbsp = "\u00A0"
    const baseURL="http://localhost:5244/api/Expenditure"
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            
          setPost(response.data);
          console.log(post)
        });
      }, []);
      const [open, setOpen] = useState(false);

      const handleOpen = () => {
        setOpen(!open);
      };
  
     
    function deleteExpense(id){

      axios.delete(baseURL+"/"+id).then(console.log(id))
           .then(post.filter((p)=> p.expId !== id) ).then(setPost(post))
           .then(console.log(id)).then(alert("Deleted Expenses"))
           
    }
      if(post == null) return null;
  return (
    <div className='expenseTable'>

 
   <table >
   

      <thead>
        <tr>
            <th>S.No</th>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Edit</th>
        </tr>
        </thead>
        {post.map((exp)=><tbody>
        <tr key={exp.expId}>
         <td>{exp.expId}</td>
         <td>{exp.expenses}</td>
         <td>₹<b>{exp.amount}</b></td>
         <td>{exp.notes}</td>
         <td style={{fontSize:'14px'}}>{moment(exp.expenseDate).format('DD-MMM-YYYY')}</td>
         <td><svg onClick={(e)=>handleOpen(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
         <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
       </svg> {open ? (
        <ul className="menu">
          <li className="menu-item">
          <button type="button" >Edit</button>
          </li>
          <li className="menu-item">
          <button type="button" onClick={(e)=>deleteExpense(exp.expId)} >Delete</button>
          </li>
        </ul>
      ) : null}
     
         </td>
        </tr>
        </tbody>)}
    </table>
    
   </div>
  )}

  export default ExpenseTable;