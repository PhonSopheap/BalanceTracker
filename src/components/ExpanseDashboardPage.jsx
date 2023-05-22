import React, { useState } from "react";
import moment from "moment";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpanseSummary";
import ChartInfo from "./ChartInfo";
import CatagoriesInfo from "./CatagoriesInfo";
import Header from "./Header";
import "./ExpanseDashboardPage"
import "./ExpanseDashboardPage.css"
//import ResizableComponent from './ResizableComponent';

const ExpanseDashboardPage = () => {
  const [filters, setFilters] = useState({
    startDate: "2023-05-01",
    endDate: "2023-05-010",
  });
  const setTextFilter = (value) => {
    //Handle some logic filter by text
    setFilters({ ...filters, text: value });
  };
  const sortByDate = () => {
    //Handle some logic that sorce by Date
    setFilters({ ...filters, sortBy: "date" });
  };
  const sortByAmount = () => {
    //Handle some logic that sorce by Amount
    setFilters({ ...filters, sortBy: "amount" });
  };
  const setStartEndDate = (state) => {
    //Handle some logic that sorce by Amount
    setFilters({
      ...filters,
      startDate: moment(state.startDate).format("YYYY-MM-DD"),
      endDate: moment(state.endDate).format("YYYY-MM-DD"),
    });
  };
  return (
    <>
      {/* <Header /> */}

      <div className="marginexpense">
        <ExpensesSummary
          expenseCount={expenseCount}
          expensesTotal={expensesTotal}
        />
      </div>
      <div className="centerboth">
      
      <div className='resize-chartinfo'>
      <ChartInfo expenses={expenses} filters={filters} />
      </div>
      <div className='resize-categoryinfo'>
      <CatagoriesInfo expenses={expenses} />
      </div>
      </div>
      


      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartEndDate={setStartEndDate}
      />
      <ExpenseList expenses={expenses} />
    </>
  );
};

// Mockup Data
const expenseCount = 100;
const expensesTotal = 100000;
const expenses = [
  {
    id: "1",
    description: "Buy Food",
    createdAt: "2023-05-01",
    amount: 2000,
    catagory: "Food",
  },
  {
    id: "2",
    description: "Buy Coffee",
    createdAt: "2023-05-02",
    amount: 1000,
    catagory: "Drink",
  },
  {
    id: "3",
    description: "Buy Coffee2",
    createdAt: "2023-05-02",
    amount: 100,
    catagory: "Drink",
  },
  {
    id: "4",
    description: "Buy Beer",
    createdAt: "2023-05-04",
    amount: 100,
    catagory: "Beer",
  },
  {
    id: "5",
    description: "Buy Beer4",
    createdAt: "2023-05-07",
    amount: 100,
    catagory: "Beer3",
  },
  {
    id: "6",
    description: "Buy Beer10",
    createdAt: "2023-05-19",
    amount: 800,
    catagory: "Beer8",
  },
  {
    id: "6",
    description: "Buy Beer10",
    createdAt: "2023-05-19",
    amount: 900,
    catagory: "Beer8",
  },
];

export default ExpanseDashboardPage;
