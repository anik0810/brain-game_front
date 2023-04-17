import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';

export default function Time() {

    const dispatch=useDispatch()

    //const [time, setTime] = useState(0);
    const life = useSelector(state => state.life)
    const time = useSelector(state => state.time)

    const {increaseTime} = bindActionCreators(actionCreators,dispatch)


    useEffect(() => {
        console.log(life);
            const id = (life>0)?setInterval(() => increaseTime(1), 1000):null;

            return () => {
                clearInterval(id);
        }
        
    });

    

    return (
        <>

            {time} s
            {/* <CountdownCircleTimer
                isPlaying
                duration={20}
                size={100}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[30, 20, 10, 0]}
            >
                {renderTime}
            </CountdownCircleTimer> */}

            {/* <CountdownCircleTimer
                isPlaying
                duration={7}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer> */}
        </>
    )
}
