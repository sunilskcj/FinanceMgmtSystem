import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
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

    function deleteExpense(id){

      axios.delete(baseURL+"/"+id).then(console.log(id))
           .then(post.filter((p)=> p.expId !== id) ).then(setPost(post))
           .then(console.log(id)).then(alert("Deleted Expenses"))
           
    }
      if(post == null) return null;
  return (
    <div> <h2 style={{textAlign:"center"}}>Expense Table</h2>
    <expenseTable>
   
   <Table striped bordered hover variant="dark">
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
         <td>{exp.amount}</td>
         <td>{exp.notes}</td>
         <td>{exp.expenseDate}</td>
         <td><button type="button" class="btn btn-primary">Edit</button>{nbsp}{nbsp}
         <button type="button" onClick={(e)=>deleteExpense(exp.expId)} class="btn btn-danger">Delete</button></td>
        </tr>
        </tbody>)}
    </Table>
    </expenseTable></div>
  )}

  export default ExpenseTable;