import React, { useState, useEffect } from 'react';
import Catagories from './Catagories';


const CatagoriesInfo = (props) => {
    const data = {
        labels: [],
        datasets: [{
            label: 'My First Dataset',
            data: [],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        }]
    };

    const [catagoryData, setCatagoryData] = useState(data);

    useEffect(() => {
        getCatagoryData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // Creating an array with only unique times (i.e. so that there is only one entry per day)
    const uniqueCatagories = (expenseCatagories) => {
        const catagoryValues = []
        for (let i = 0; i < expenseCatagories.length; i++) {
            catagoryValues.push(expenseCatagories[i]);
        }
        const uniq = [...new Set(catagoryValues)]
        return uniq;
    }


    const addedCatagoryValues = (combinedList, catagoryList) => {
        //combinedList[0][0])// dollar values
        //combinedList[0][1][0].valueOf() //time value

        const amountList = [];
        for (let i = 0; i < catagoryList.length; i++) {
            let tempTotal = 0;
            for (let j = 0; j < combinedList.length; j++) {
                if (catagoryList[i] === combinedList[j][1][0]) {
                    tempTotal += combinedList[j][0];
                }
            }
            amountList.push(tempTotal)
        }
        return amountList;
    }

    const getCatagoryData = () => {
        console.log("Hi")
        const expenseCatagories = props.expenses.map((expense) => expense.catagory);
        const expenseAmounts = props.expenses.map((expense) => expense.amount);
        console.log("expenseCatagories", expenseCatagories)
        console.log("expenseAmounts", expenseAmounts)
        let combinedList = expenseAmounts.map(function (item, i) {
            return [item, [expenseCatagories[i]]];
        });

        const catagoryList = uniqueCatagories(expenseCatagories);
        const amountList = addedCatagoryValues(combinedList, catagoryList);
        console.log("amountList", amountList);

        setCatagoryData({

            datasets: [{
                data: amountList,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(52, 73, 94, 0.6)',
                    'rgba(123, 49, 43, 0.6)'

                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(52, 73, 94, 1)',
                    'rgba(123, 49, 43, 1)'
                ],
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: catagoryList
        })
    }

    return (
        <div>
            <Catagories
                categoryData={catagoryData}
            />
        </div>
    );
}

export default CatagoriesInfo;