import React, { useState } from "react";
import moment from "moment";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpanseSummary";
import ChartInfo from "./ChartInfo";
import CatagoriesInfo from "./CatagoriesInfo";
import Header from "./Header";
import "./ExpanseDashboardPage"

const ExpanseDashboardPage = () => {
  const [filters, setFilters] = useState({
    startDate: moment().format('YYYY-MM-01'),
    endDate: moment().endOf('month').format('YYYY-MM-DD'),
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

      {/* <div className="Resize-ExpenseSummary"> */}
        <ExpensesSummary
          expenseCount={expenseCount}
          expensesTotal={expensesTotal()}
        />
      {/* </div> */}


      <ChartInfo expenses={expenses} filters={filters} />
      <CatagoriesInfo expenses={expenses} />
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
const expenses = [
  {
    id: "1",
    description: "Buy Food",
    createdAt: "2023-05-01",
    amount: 1000,
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
    description: "Buy Vegetable",
    createdAt: "2023-05-04",
    amount: 100,
    catagory: "Vegetable",
  },
  {
    id: "5",
    description: "Buy Vegetable4",
    createdAt: "2023-05-07",
    amount: 100,
    catagory: "Vegetable3",
  },
  {
    id: "6",
    description: "Buy Vegetable10",
    createdAt: "2023-05-19",
    amount: 850,
    catagory: "Vegetable5",
  },
  {
    id: "7",
    description: "Buy Vegetable10",
    createdAt: "2023-05-19",
    amount: 800,
    catagory: "Vegetable8",
  },
  {
    id: "8",
    description: "Buy Vegetable11",
    createdAt: "2023-05-22",
    amount: 500,
    catagory: "Vegetable8",
  },
  {
    id: "8",
    description: "Buy Vegetable11",
    createdAt: "2023-07-22",
    amount: 500,
    catagory: "Vegetable8",
  },
  {
    id: "9",
    description: "Buy Vegetable11",
    createdAt: "2023-05-25",
    amount: 400,
    catagory: "Vegetable8",
  },
];
const expenseCount = expenses.length;
const expensesTotal = ()=>{
  let total = 0;
  for(let i=0; i<expenses.length; i++){
    total+=expenses[i].amount;
  }
  return total;
}

export default ExpanseDashboardPage;
