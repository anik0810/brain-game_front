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

export default function UserScatter(props) {

    const [scores, setScores] = useState([]);
    const [time, setTime] = useState([]);
    const [name, setName] = useState();
    useEffect(() => {
        setName(props.name);
        axios
            .get(`http://65.0.74.234:8989/getUserAllScores/${props.email}`)
            .then(({ data }) => {
                console.log(data);
                setScores(data);
            });

        axios
            .get(`http://65.0.74.234:8989/getUsersAllTime/${props.email}`)
            .then(({ data }) => {
                console.log(data);
                setTime(data);
            });

    }, [props.email])

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
                text: ` ${name}'s scores and their corresponding time's co-relation`,
            },
        }
    };

    

    const datas = scores.map((x, i) => {
        return {
            x: x,
            y: time[i]
        };
    });


    const data = {
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
