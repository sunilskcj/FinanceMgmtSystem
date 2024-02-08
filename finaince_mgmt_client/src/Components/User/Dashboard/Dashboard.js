import ExpenseTable from '../Table/ExpenseTable/ExpenseTable';
import IncomeTable from '../Table/IncomeTable/IncomeTable';
import './Dashboard.css'
function Dashboard(){
return(
    <div className='dash'>
        <ExpenseTable />
        <IncomeTable /><br />
    </div>
);
}

export default Dashboard;