import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from "axios";
import "./ExpenseTable.css"

function ExpenseTable() {
    const baseURL="http://localhost:5244/api/Expenditure"
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            
          setPost(response.data);
          console.log(post)
        });
      }, []);
      if(post == null) return null;
  return (
    <expenseTable>
   <Table striped bordered hover variant="dark">
      <thead>
        <tr>
            <th>S.No</th>
            <th>ExpenseTable</th>
            <th>Amount</th>
            <th>Notes</th>
        </tr>
        </thead>
        {post.map((exp)=><tbody>
        <tr key={exp.expId}>
         <td>{exp.expId}</td>
         <td>{exp.expenses}</td>
         <td>{exp.amount}</td>
         <td>{exp.notes}</td>
        </tr>
        </tbody>)}
    </Table>
    </expenseTable>
  )}

  export default ExpenseTable;