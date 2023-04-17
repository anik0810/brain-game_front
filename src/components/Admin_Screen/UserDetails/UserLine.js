import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import axios from 'axios';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

export default function UserLine(props) {

    const [scores, setScores] = useState([]);
    const [name, setName] = useState();

    useEffect(() => {
        setName(props.name)
        axios.get(`http://65.0.74.234:8989/getUserAllScores/${props.email}`)
            .then(({ data }) => {
                setScores(data);
            })
    }, [props.email])



    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${name}'s All Scores Line Graph`,
            },
        },
    };

    const labels = [];

    for (let i = 0; i < scores.length; i++) {
        labels.push(`Game ${i+1}`)
    }

    const data = {
        labels,
        datasets: [
            {
                label: labels,
                data: scores.map(row => row),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    console.log(data);


    return (
        <Line options={options} data={data} />
    )
}
