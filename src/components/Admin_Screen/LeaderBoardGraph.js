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
import * as faker from 'faker';
import axios from 'axios';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);




export default function LeaderBoardGarph() {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        axios
            .get(`http://65.0.74.234:8989/gelAllusersMaxScore`)
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
            text: 'All Users Highest Score Bar',
          },
        },
      };

    const data = {
        labels: leaders.map(row => row.name),
        datasets: [
            {
                label: 'Highest Score',
                data: leaders.map(row=>row.maxScore),
                backgroundColor: 'rgb(190,218,247)',
            }
        ]
    };

    return <Bar options={options} data={data} />;
}