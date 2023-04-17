import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function CorelationTimeScore() {

    const [leaders, setLeaders] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        axios
            .get(`http://65.0.74.234:8989/gelAllusersMaxScore`)
            .then(({ data }) => {
                setLeaders(data);
            });

        axios
            .get(`http://65.0.74.234:8989/gelAllusersMinTime`)
            .then(({ data }) => {
                setTime(data);
            });

    }, [])

    const options = {
        scales: {
            y: {
                labels: 'maxScore',
                beginAtZero: true,
            },
            x: {
                labels: 'time',
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "All Users Highest Score and their corresponding time's co-relation",
            },
        }
    };

    

    const datas = leaders.map((x, i) => {
        return {
            x: x['maxScore'],
            y: time[i]['minTime']
        };
    });

    const data = {
        labels: leaders.map(row => row.name),
        datasets: [
            {
                label: 'Score-Time',
                data: datas,
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };
    return (
        <Scatter options={options} data={data} />
    )
}
