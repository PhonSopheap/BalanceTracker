import React from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

function MyChart({ chartData, selectedStartDate, selectedEndDate}) {
    return (
        <div className="content-container">
            <div className="chart">

                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: `Expenses for ${moment(selectedStartDate).format("MMMM-YYYY")}`,
                                font: {
                                    size: 20
                                }
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        },
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: "day",
                                },
                                min: selectedStartDate,
                                max: selectedEndDate,
                            },
                            y: {
                                beginAtZero: true
                            }
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default MyChart;
