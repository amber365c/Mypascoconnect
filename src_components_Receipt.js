import React from 'react';
import './Receipt.css';

function Receipt({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      {expenses.map((expense, index) => (
        <div key={index} className="receipt-item">
          <span>{expense.description}</span>
          <span>${expense.amount}</span>
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Receipt;
