import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () => {
  const [chartData, setChartData] = useState([]);

  const onSubmit = (expense) => {
    // Request to API to save expense
    const updatedChartData = [...chartData, expense];
    setChartData(updatedChartData);
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title"><span>Add Expense</span></h1>
        </div>
      </div>

      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddExpensePage;
