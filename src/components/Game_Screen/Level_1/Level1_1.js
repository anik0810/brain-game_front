import React, { useState, useEffect } from 'react'
import './Level1_1.css'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state/index'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { UserBody } from '../../../models/userModel';
import AnsButton from '../AnsButton/AnsButton';
import { deductPoint } from '../../../state/action-creators';
import Hints from '../Hints/Hints';

export default function Level1_1() {
  const [ans, setAns] = useState('');
  const dispatch = useDispatch();

  const getWrongAttempt = useSelector(state => state.wrongAttempt)
  const [highestScore, setHighestScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const { deductLife } = bindActionCreators(actionCreators, dispatch)
  const { deductPoint } = bindActionCreators(actionCreators, dispatch)
  const userState = useSelector(state => state.userState)


  let email = localStorage.getItem('email')

  useEffect(() => {
    axios
      .get(`http://65.0.74.234:8989/getHighestScore?email=${email}`)
      .then(({ data }) => {
        setHighestScore(data);
      });
    axios
      .get(`http://65.0.74.234:8989/getQuestionByNumber/${userState['level']}`)
      .then((data) => {
        setQuestion(data.data[0]);
        setImageUrl(data.data[1]);
      })
  }, [userState['level']])

  useEffect(() => {
    if (getWrongAttempt === 2) {
      deductLife(1);
    }
    else if (getWrongAttempt > 2) {
      deductPoint(2)
    }
  }, [getWrongAttempt])





  return (
    <>

      <div className='puzzle-box'>
        {(imageUrl != '') ?
          <div className='image my-2'>
            <img src={imageUrl} className='photo'></img>
          </div>
          : null
        }
        <div className='card-body mt-2'>
          <p>{question}</p>
        </div>
        <div class="my-3">
          <input type='text' class="form-control" placeholder='Enter your ans' onChange={(event) => setAns(event.target.value)} />
        </div>
        {(getWrongAttempt > 0) ?
          <div className='mb-3'>
            <p>Wrong Answer !! Life'll be decreased after 1 wrong attempt</p>
          </div> : null}

        <div className='buttons mb-4'>
          <AnsButton ans={ans} questionNumber={userState['level']} />
          <Hints/>
        </div>

      </div>

    </>
  )
}
