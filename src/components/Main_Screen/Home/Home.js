import React from "react"
import "./Home.css"
import bot from '../../../images/brain.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import Login from "../Login/Login"
import Signup from "../Login/Signup"

const Home = () => {
    return (
        <>
            <div className="main home">
                <div className="left">
                    <h1>Hello <span>👋</span> Ready for a <span>Mental Workout</span> ? Let's start !!</h1>
                    <div className='desc'>
                        <p>No matter how beautiful the sunset, it saddened her knowing she was one day older.
                            It's important to remember to be aware of rampaging grizzly bears.
                            At that moment she realized she had a sixth sense.</p>
                    </div>
                    <div className="buttons">
                        <button className="play" data-bs-toggle="modal" data-bs-target="#login">
                            Sign In
                            <span>
                                <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                            </span>
                        </button>
                        <button className="play" data-bs-toggle="modal" data-bs-target="#signup">
                            Sign Up
                            <span>
                                <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                            </span>
                        </button>
                        <Login/>
                        <Signup/>
                    </div>
                </div>
                <div className="right">
                    <img src={bot} />
                </div>
            </div>
        </>
    )
}

export default Home
