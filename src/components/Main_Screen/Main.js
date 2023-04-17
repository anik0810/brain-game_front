import React, { useEffect } from 'react'
import Login from './Login/Login'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import './Main.css'
import Game from '../Game_Screen/Game'
import Life from './Life/Life'
import { useSelector } from 'react-redux'
import GameOver from '../Game_Screen/GameOver/GameOver'

export default function Main() {
    const level = useSelector(state=>state.level);
    /*useEffect(() => {
        if (level!=1) {
            window.confirm('reload')
        }
    }, [])*/
    return (
        <>
            <div className='main1'>
                <Game/>
            </div>
            <GameOver/>
        </>
    )
}
