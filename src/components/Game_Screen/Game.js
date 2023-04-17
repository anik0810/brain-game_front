import React, { useEffect } from 'react'
import Level1_1 from './Level_1/Level1_1'
import Hints from './Hints/Hints'
import './Game.css'
import QuestionNo from './Question_No/QuestionNo'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import Life from '../Main_Screen/Life/Life'

export default function Game() {

    const dispatch = useDispatch();
    const { userState } = bindActionCreators(actionCreators, dispatch);
    const { refreshWrongAttempt } = bindActionCreators(actionCreators, dispatch);
    const level = useSelector(state => state.level)

    useEffect(() => {
        let email = localStorage.getItem('email');
        refreshWrongAttempt();
        axios
            .put(`http://65.0.74.234:8989/updateLevel/${email}/${level}`)
            .then(({ data }) => {
                console.log(data);
                userState(data);
            });
        if (level > 10) {

        }
    }, [level])

    return (
        <>
            <Life />
            <div className='container mt-4'>
                <QuestionNo />
                {(level <= 10) ?
                    (<div className='game_dashboard'>
                        <Level1_1 />
                    </div>) :
                    <div>
                        <p>Congratulation You reached top level !!</p>
                    </div>
                }

            </div>
        </>
    )
}
