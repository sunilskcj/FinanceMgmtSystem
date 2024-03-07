import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PieChart from "../Charts/PieChart";
import './UserHome.css'
function UserHome() {
    const ExpensebaseURL = "http://localhost:5244/api/Expenditure/expenseTable"
    const IncomebaseURL = "http://localhost:5244/api/Expenditure/incomeTable"
    const [Expense, setExpense] = useState(null);
    const [Income, setIncomeData] = useState(null);
    const authToken = localStorage.getItem('authToken');
    const headers = {
      
        'Authorization': `Bearer ${authToken}`,
      };
    useEffect(() => {
        
        axios.get(ExpensebaseURL,{headers}).then((response) => {
            
            
            const ExpenseData = response.data;
            const ExpensechartData = ExpenseData.map(item => item.netAmount);
            const ExpensechartLable = ExpenseData.map(item => item.category);
            setExpense({data:ExpensechartData,lable:ExpensechartLable})
          }).catch((err)=>console.log(err));
        axios.get(IncomebaseURL,{headers}).then((response) => {
            
            
            const IncomeData = response.data;
            const IncomeDatachartData = IncomeData.map(item => item.netAmount);
            const IncomeDatachartLable = IncomeData.map(item => item.category);
            setIncomeData({data:IncomeDatachartData,lable:IncomeDatachartLable})
          }).catch((err)=>console.log(err));
     
    }, []);
   
   
    if(Expense == null || Income == null ) return null;
    return (
        <div className="container" style={{marginTop:"2%"}}>
       
        <div className="ChartContainer">
       
        <div className="expenseChart">{Object.keys(Expense).length>0 && <PieChart data={Expense} />}</div>
        <div className="incomeChart">{Object.keys(Income).length>0 && <PieChart data={Income} />}</div>
    
      
        </div>
        
        </div>
    )
}
export default UserHome;