import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Hints() {

    const [show, setShow] = useState(false);
    const [hints, setHints] = useState([]);
    const [numberHints, setNumberHints] = useState();
    const question = useSelector(state => state.level)

    let i = 0;


    useEffect(() => {
        axios.get(`http://65.0.74.234:8989/getHints/${question}`)
            .then((data) => {
                setHints(data.data)
            })
        console.log(question);
    }, [question]);

    function showHints() {
        setNumberHints(hints[i]);
        setShow(true);
        console.log(i);
    }
    function moreHints() {
        i++;
        setNumberHints(hints[i]);
    }

    const handleClose = () => setShow(false);



    return (
        <>

            <div className="bottom-bar">
                <button className="hints btn btn-warning" onClick={() => { showHints() }}>Hints</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hints</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {numberHints}

                </Modal.Body>
                <Modal.Footer>
                    <button variant="primary" onClick={()=>{moreHints()}}>More Hints</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
