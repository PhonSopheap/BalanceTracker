import React, { useEffect, useState } from 'react';
import moment from 'moment';
import MyChart from './Chart';


const ChartInfo = (props) => {
    const data = {
        datasets: [
            {
                label: 'Amount in Dollars',
                data: [],
                backgroundColor: ['rgba(54, 162, 235, 0.6)'],
                hoverBackgroundColor: 'rgba(153, 102, 254, 0.6)',
                borderWidth: 1,
            }
        ],
        labels: [],
    }
    const [chartData, setChartData] = useState(data)

    useEffect(() => {
        getChartData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Creating an array with only unique times (i.e. so that there is only one entry per day)
    const uniqueTimes = (expenseDay) => {
        const momentValues = []
        for (let i = 0; i < expenseDay.length; i++) {
            momentValues.push(expenseDay[i].valueOf());
        }
        const uniq = [...new Set(momentValues)]
        return uniq;
    }

    // Taking the unique times and creating a corresponding array
    // with the values on that day added together
    const addedValues = (combinedList, timeList) => {
        const amountList = [];
        for (let i = 0; i < timeList.length; i++) {
            let tempTotal = 0;
            for (let j = 0; j < combinedList.length; j++) {
                if (timeList[i] === combinedList[j][1][0].valueOf()) {
                    tempTotal += combinedList[j][0];
                }
            }
            amountList.push(tempTotal)
        }
        return amountList;
    }


    const getChartData = () => {
        //CHART DATA
        const expenseTimes = props?.expenses?.map((expense) => moment(expense.createdAt));
        const expenseAmounts = props?.expenses?.map((expense) => expense.amount);

        //rounding each expense to the day
        const expenseDay = expenseTimes?.map((expense) => expense.startOf('day'))
        //Combining the two lists
        let combinedList = expenseAmounts?.map(function (item, i) {
            return [item, [expenseDay[i]]];
        });

        //Aggregating the data so values added on the same day are added together
        const timeList = uniqueTimes(expenseDay);
        const amountList = addedValues(combinedList, timeList);

        setChartData({
            datasets: [
                {
                    label: 'Amount in Dollars',
                    data: amountList,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    hoverBackgroundColor: 'rgba(153, 102, 254, 0.6)',
                }
            ],
            labels: timeList,
        })
    }

    return (
        <div>
            <MyChart
                chartData={chartData}
                selectedStartDate={props.filters.startDate}
                selectedEndDate={props.filters.endDate}
            />
        </div>
    );
}


export default ChartInfo;
