import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export default function LeaderBoardMinTime() {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        axios
            .get(`http://65.0.74.234:8989/gelAllusersMinTime`)
            .then(({ data }) => {
                setLeaders(data);
            });
    }, [])

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'All Users Lowest taken Time Bar',
          },
        },
      };

    const data = {
        labels: leaders.map(row => row.name),
        datasets: [
            {
                label: 'Lowest Time',
                data: leaders.map(row=>row.minTime),
                backgroundColor: 'rgb(54,140,231)',
            }
        ]
    };

    return <Bar options={options} data={data} />;
}