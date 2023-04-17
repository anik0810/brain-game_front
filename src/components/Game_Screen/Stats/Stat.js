import React, { useEffect, useState } from 'react';
import UserLine from '../../Admin_Screen/UserDetails/UserLine'
import { useSelector } from 'react-redux';
import UserScatter from '../../Admin_Screen/UserDetails/UserScatter';
import AverageScore from '../../Admin_Screen/UserDetails/AverageScore';

export default function Stat() {
    const getuserState = useSelector(state => state.userState)
    const [email, setEmail] = useState('')
    useEffect(() => {
        setEmail(localStorage.getItem('email'));
    }, [])
    return (
        <>
            <div className='admindashboard'>
                <div className='data-report mt-4'>
                    <div className='leaderboardgraph'>
                        <UserLine email={email} name={getuserState['name']} />
                    </div>
                    <div className='leaderboardgraph'>
                        <UserScatter email={email} name={getuserState['name']} />
                    </div>
                    <div className='leaderboardgraph'>
                        <AverageScore email={email} name={getuserState['name']} />
                    </div>
                </div>
            </div>
        </>
    )
}
