import React from 'react'
import './Hints.css'
import Login from '../../Main_Screen/Login/Login'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import { useDispatch } from 'react-redux'
import { levelup } from '../../../state/action-creators'

export default function Solution() {
    const dispatch = useDispatch();
    const { deductPoint } = bindActionCreators(actionCreators, dispatch)
    return (
        <>
            <div className="hintsBar">
                <button className="item">Resume</button>
                <button className="item">Hint</button>
                <button className="item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Answer
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">See Answer</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure to see the answer ? It wiil deduct 10 points .
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" onClick={() => { deductPoint(10) }} >Confirm</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
