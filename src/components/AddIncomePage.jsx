import React, { useState } from 'react';
import IncomeForm from './IncomeForm';

const AddIncomePage = () => {
  const [chartData, setChartData] = useState([]);

  const onSubmit = (income) => {
    // Request to API to save expense
    const updatedChartData = [...chartData, income];
    setChartData(updatedChartData);
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title"><span>Add Income</span></h1>
        </div>
      </div>

      <div className="content-container">
        <IncomeForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddIncomePage;
