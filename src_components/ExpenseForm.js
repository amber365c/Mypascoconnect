import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount });
    setDescription('');
    setAmount('');
  };

  return (
