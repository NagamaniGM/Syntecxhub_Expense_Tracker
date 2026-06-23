import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css'; // Importing our clean style sheet rules here

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const titleInputRef = useRef(null);

  useEffect(() => {
    fetch('/mockData.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((data) => {
        setExpenses(data);
      })
      .catch((error) => console.error("Error loading mock data:", error));

    titleInputRef.current?.focus();
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(item => item.id !== id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: parseFloat(amount),
      category: category
    };

    setExpenses([...expenses, newExpense]);
    setTitle('');
    setAmount('');
    titleInputRef.current?.focus();
  };

  const totalAmount = useMemo(() => {
    return expenses.reduce((sum, item) => sum + item.amount, 0);
  }, [expenses]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      
      {/* Running Total Card Banner */}
      <div className="total-card">
        <div style={{ fontSize: '14px', opacity: 0.8, textTransform: 'uppercase', marginBottom: '4px' }}>Total Balance</div>
        <h2>₹{totalAmount}</h2>
      </div>
      
      <div className="count-text">Tracking: {expenses.length} Entries</div>

      {/* Expense Input Form */}
      <form onSubmit={handleSubmit} className="expense-form">
        <input 
          ref={titleInputRef}
          type="text" 
          placeholder="Expense Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Amount (₹)" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Education">Education</option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
      
      {/* Formatted List Display */}
      <ul className="expense-list">
        {expenses.map((item) => (
          <li key={item.id} className="expense-item">
            <div className="item-info">
              <span className="item-title">{item.title}</span>
              <span className="item-meta">{item.category}</span>
            </div>
            
            <div className="item-right">
              <span className="item-amount">₹{item.amount}</span>
              <button onClick={() => deleteExpense(item.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;