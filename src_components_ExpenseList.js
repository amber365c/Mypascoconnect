import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <span>{expense.description}</span>
          <span>${expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
