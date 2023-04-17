import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartofWinners() {

    const [levelandUser, setLevelandUser] = useState({});

    useEffect(() => {
        axios
            .get(`http://65.0.74.234:8989/getnoOfUsersinEachLevel`)
            .then(({ data }) => {
                setLevelandUser(data);
            });
    }, [])

    let labels = [];
    let datas = [];

    for (let i = 0; i < 11; i++) {
        labels.push(`q: ${i}`);
        datas.push(levelandUser[i]);
        console.log(levelandUser);
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'no of users in each Question Level',
            },
        },
        maintainAspectRatio: false 
    };

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'no of users',
                data: datas,
                backgroundColor: [
                    'blue',
                    'rgb(54,140,231)',
                    'rgb(190,218,247)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                
            },
        ],
    };
    return (
        <Pie data={data}
            options={options} />
    )
}
