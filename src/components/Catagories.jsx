import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Categories = ({ categoryData }) => {
  const options = {
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 16,
        fontColor: '#333', //dark grey
      },
    },
  };

  return (
    <div className="content-container">
      <div className="categories">
        <Doughnut data={categoryData} options={options} />
      </div>
    </div>
  );
};

export default Categories;
