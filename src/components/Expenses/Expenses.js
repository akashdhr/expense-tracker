import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filter, setFilter] = useState('2020');

  const filterChangeHandler = (selectedYear) =>{
    //console.log("In Expenses.js");
    setFilter(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filter;
  })


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onNewFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;