import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <Header />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <Receipt expenses={expenses} />
    </div>
  );
}

export default App;
