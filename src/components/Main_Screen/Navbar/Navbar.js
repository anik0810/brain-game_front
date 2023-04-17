import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { UserBody } from '../../../models/userModel';

import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const point = useSelector(state => state.point)
    const level = useSelector(state => state.level)
    const getuserState = useSelector(state => state.userState)
    const isLoggedIn = useSelector(state => state.loggedIn)


    const [highestScore, setHighestScore] = useState(0);

    const dispatch = useDispatch();
    const { loggedIn } = bindActionCreators(actionCreators, dispatch)
    const { userState } = bindActionCreators(actionCreators, dispatch)

    const score = useSelector(state => state.score)

    let userDetails = JSON.parse(localStorage.getItem('userDetails'));

    let email = localStorage.getItem('email')

    useEffect(() => {
        let loginStore = localStorage.getItem('isLoggedIn') === 'true'
        loggedIn(loginStore)
    }, [])

    const navigate = useNavigate();

    function logOut() {
        localStorage.clear();
        navigate('/home');

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Brain Game</Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/leaderBoard'>Leader Board</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/admin/login">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Rules</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {(isLoggedIn) ? getuserState['name'] : 'Profile'}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Level : {getuserState['level']} </a></li>
                            <li><a className="dropdown-item" href="#" >Highest Point :{getuserState['highestScore']}</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            {/* <button onClick={()=>{getScore('banerjeerupsa188@gmail.com')}}></button> */}
                            <li><a className="dropdown-item" href="/" onClick={() => { logOut() }} >Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}
