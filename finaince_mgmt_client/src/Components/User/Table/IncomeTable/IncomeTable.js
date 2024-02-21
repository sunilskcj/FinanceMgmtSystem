
import { useState, useEffect } from "react";
import axios from "axios";
import "./IncomeTable.css"
import moment from 'moment';
import { Link } from 'react-router-dom';
function IncomeTable() {
  let nbsp = "\u00A0"
    const baseURL="http://localhost:5244/api/Expenditure/income"
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            
          setPost(response.data);
         
        });
      }, []);
      
      function deleteIncome(id){

        axios.delete("http://localhost:5244/api/Expenditure/"+id).then(console.log(id))
             .then(post.filter((p)=> p.expId !== id) ).then(setPost(post))
             .then(alert("Deleted Expenses"))
             
      }
      if(post == null) return null;
  return (
    <div className='incomeTable'>
  <br />
   
   <table className='table'>
      <thead>
        <tr>
          
            <th scope="col">Income Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Notes</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
        </tr>
        </thead>
        {post.map((exp)=><tbody key={exp.expId}>
        <tr >
          
        <td scope="row"><Link  className="nav-link text-dark" to={''+exp.expId} >{exp.expenses}</Link></td> 
        <td scope="row">{exp.category}</td>
        <td scope="row">₹<b>{exp.amount}</b></td>
        <td scope="row">{exp.notes}</td>
        <td scope="row" style={{fontSize:'14px'}}>{moment(exp.expenseDate).format('DD-MMM-YYYY')}</td>
         <td scope="row">
         <button type="button" onClick={(e)=>deleteIncome(exp.expId)} className="btn btn-danger">Delete</button></td>
         <td>
     </td>
        </tr>
        </tbody>)}
    </table>
    </div>
  )}

  export default IncomeTable;