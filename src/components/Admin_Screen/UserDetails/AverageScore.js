import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AverageScore(props) {
    const [scores, setScores] = useState([]);
    const [time, setTime] = useState([]);
    const [name, setName] = useState();

    useEffect(() => {
        setName(props.name)
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

    const avgScore = () => {
        let sum = 0;
        for (let i = 0; i < scores.length; i++) {
            sum += scores[i]
        }
        return sum / scores.length
    }
    const avgTime = () => {
        let sum = 0;
        for (let i = 0; i < time.length; i++) {
            sum += time[i]
        }
        return sum / time.length
    }

    return (
        <>
            <div className=''>
                <h4>{name}'s summary</h4>
                <hr className='my-2'></hr>
                <p>Average Score : {avgScore()}</p>
                <p>Average Time : {avgTime()}</p>
            </div>
        </>
    )
}
