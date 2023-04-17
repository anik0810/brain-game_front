import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Leaderboard.css'
import { useSelector } from 'react-redux';

export default function LeaderBoard() {
    const [leaders, setLeaders] = useState([]);
    const score = useSelector(state=>state.point);

    useEffect(() => {
        axios
            .get(`http://65.0.74.234:8989/gelAllusersScore`)
            .then(({ data }) => {
                setLeaders(data);
            });
    },[score])


    return (
        <div class="container mt-4">
            <h4>Leader Board</h4>
            <hr class="mb-4" />
            {leaders.map(leader =>{
                return (
                    <div>
                        {leader[0]} : {leader[1]}
                    </div>
                )
            })}
            

        </div>
    )
}
