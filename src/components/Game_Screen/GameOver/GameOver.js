import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GameOver() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const life = useSelector(state => state.life)
    const level = useSelector(state => state.level)
    const score = useSelector(state => state.point);
    const time = useSelector(state => state.time)

    const { refreshLevel } = bindActionCreators(actionCreators, dispatch)
    const { refreshLife } = bindActionCreators(actionCreators, dispatch)
    const { refreshPoint } = bindActionCreators(actionCreators, dispatch)
    const { refreshTime } = bindActionCreators(actionCreators, dispatch)
    const { refreshWrongAttempt } = bindActionCreators(actionCreators, dispatch)

    const [heading,setHeading]=useState('')


    useEffect(() => {
        if (life <= 0) {
            setShow(true)
            setHeading('Game Over')
        }
        if(level>10){
            setShow(true);
            setHeading('Congratulation !! You reached max level')
        }
    }, [life,level])

    function reStart() {
        refreshLevel(1);
        refreshLife(3);
        refreshPoint(0);
        refreshTime(0);
        refreshWrongAttempt(0);
        setShow(false)
        updateScore();
        updateTime();
        navigate('/game')
    }

    function updateScore() {
        let email = localStorage.getItem('email');
        axios
            .put(`http://65.0.74.234:8989/addScore/${email}/${score}`)
            .then(({ data }) => {
                console.log(data);
            });
    }
    function updateTime() {
        let email = localStorage.getItem('email');
        axios
            .put(`http://65.0.74.234:8989/addTime/${email}/${time}`)
            .then(({ data }) => {
                console.log(data);
            });
    }

    return (
        <>
            <Modal show={show} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your Score is : {score}<br />
                    Taken Time : {time} s
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => { reStart() }}>Restart Game</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
