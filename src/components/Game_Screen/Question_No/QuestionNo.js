import React from 'react'
import './Question.css'
import { UserBody } from '../../../models/userModel'
import { useSelector } from 'react-redux'
import Time from '../Time/Time'

export default function QuestionNo() {
    
    const userState = useSelector(state => state.userState)

    return (
        <>
            <div className='question'>
                <h2>Question No: {userState['level']}</h2>
                {/* <Time/> */}
            </div>
        </>
    )
}
