import React, { useEffect } from 'react'
import axios from 'axios';
import './Life.css'
import { useSelector } from 'react-redux';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Time from '../../Game_Screen/Time/Time';

export default function Life() {
    const score = useSelector(state => state.point);
    const userState = useSelector(state => state.userState);
    const life = useSelector(state => state.life)
    const accuracy = useSelector(state => state.accuracy)




    let email = localStorage.getItem('email');

    useEffect(() => {

    }, [score])

    return (
        <div class="container life mt-4">
            <div className='item-life'>
                <p>Life :</p>
                <p className='life-icons'>
                    <FontAwesomeIcon icon={faHeart} style={{ 'color': (life >= 1) ? 'red' : 'black' }} />
                    <FontAwesomeIcon icon={faHeart} style={{ 'color': (life >= 2) ? 'red' : 'black' }} />
                    <FontAwesomeIcon icon={faHeart} style={{ 'color': (life >= 3) ? 'red' : 'black' }} />
                </p>
            </div>
            <div className='item-life'>
                <p>Score : {score}</p>
                <p>Highest : {userState['highestScore']}</p>
                <p>Accuracy</p>
            </div>
            <div className='item-life'>
                <p>Time : <Time /> </p>
                <p>Lowest Time : {(userState['minTime'] !== 99999999) ? userState['minTime'] : 0} s</p>
            </div>
                
        </div>
    )
}
