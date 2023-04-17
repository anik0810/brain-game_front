import React from 'react'
import LeaderBoardGarph from './LeaderBoardGraph'
import './AdminDashboard.css'
import LeaderBoardMinTime from './LeaderBoardMinTime'
import CorelationTimeScore from './CorelationTimeScore'
import PieChartofWinners from './PieChartofWinners'
import UsersDetails from './UserDetails/UsersDetails'
import UserLine from './UserDetails/UserLine'

export default function AdminDashboard() {
    return (
        <>
            <div className='admindashboard'>

                <h2 className='mt-5 text-center'>Report of All Users Data </h2>
                <div className='data-report mt-4'>
                    <div className='leaderboardgraph'>
                        <LeaderBoardGarph />
                    </div>
                    <div className='leaderboardgraph'>
                        <LeaderBoardMinTime />
                    </div>
                    <div className='leaderboardgraph'>
                        <CorelationTimeScore />
                    </div>
                    <div className='leaderboardgraph'>
                        <PieChartofWinners />
                    </div>
                </div>
                <h2 className='mt-5 text-center'>Report of Each Users Data</h2>
                
                    <UsersDetails/>
                

            </div>
        </>
    )
}
