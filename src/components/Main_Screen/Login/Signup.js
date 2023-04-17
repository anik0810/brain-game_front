import React, { useState } from 'react'
import axios from 'axios';
import { UserBody } from '../../../models/userModel'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userState } = bindActionCreators(actionCreators, dispatch)
    const { loggedIn } = bindActionCreators(actionCreators, dispatch)

    const navigateToGame = () => {
        navigate('/game');
      };

    let userBody = new UserBody();
    function signUp() {

        userBody.name=name;
        userBody.email=email;
        userBody.password=pass
        
        console.log(userBody.email);
        axios
            .post(`http://65.0.74.234:8989/signUp`,userBody)
            .then(({ data }) => {
                if (data === 'invalid credential' || data === 'You Have not Any Account !!') {
                    console.log(data);
                }
                else {
                    loggedIn(true);
                    userState(data)
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('email', data['email']);
                    localStorage.setItem('name', data['name']);
                    navigateToGame();
                }

            });
    }

    return (
        <>

            <div className="modal fade" id="signup" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPass(event.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={() => { signUp() }} data-bs-dismiss="modal">LogIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
