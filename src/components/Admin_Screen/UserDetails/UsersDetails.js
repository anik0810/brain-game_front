import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './User.css'
import UserLine from './UserLine';
import UserScatter from './UserScatter';
import AverageScore from './AverageScore';

export default function UsersDetails() {

    const [allUsers, setAllUSers] = useState([]);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [color, setColor] = useState(0);



    const listStyle = (i) => {
        return (
            {
                backgroundColor: (color === i) ? 'blue' : null,
                color: (color === i) ? 'white' : 'black'
            })
    }

    useEffect(() => {
        axios.get('http://65.0.74.234:8989/getAllUSersNameAndMail')
            .then(({ data }) => {
                setAllUSers(data);
                setEmail(data[0]['email']);
                setName(data[0]['name']);
                console.log(data);
            })

    }, [])
    return (
        <div className='data-report'>
            <div className='leaderboardgraph'>
                <h5>All Users Name</h5>
                {allUsers.map((user, i) => {
                    return (
                        <p>
                            <p onClick={() => { setEmail(user['email']); setName(user['name']); setColor(i) }} style={listStyle(i)}>{user['name']}</p>
                        </p>
                    )
                })}
            </div>
            <div className='leaderboardgraph'>
                <UserLine email={email} name={name} />
            </div>
            <div className='leaderboardgraph'>
                <UserScatter email={email} name={name} />
            </div>
            <div className='leaderboardgraph'>
                <AverageScore email={email} name={name} />
            </div>
        </div>
    )
}
