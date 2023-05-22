import React from 'react';
import { useNavigate } from 'react-router-dom';
import numeral from 'numeral';

const ExpanseSummary = ({ expenseCount, expensesTotal }) => {
    const navigate = useNavigate();

    const toCreateExpense = () => {
      navigate('/create/expense');
    };
    const toCreateIncome = () => {
      navigate('/create/income');
    };

    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
    return (
        //<div className="size">
            <div className="page-header">
                <div className="content-container header__content">
                    <h2 className="page-header__title ">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h2>
                    <div className="page-header__actions ">
                        <button style={{'marginRight': '1rem'}} className="button" onClick={toCreateExpense}>Add Expense</button>
                        <button className="button" onClick={toCreateIncome}>Add Incomee</button>
                    </div>
                </div>
            </div>
        //</div>
    )
}


export default ExpanseSummary;