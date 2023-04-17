import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { levelUp, userState } from '../../../state/action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';

export default function AnsButton(props) {

  const dispatch = useDispatch();

  const { levelup } = bindActionCreators(actionCreators, dispatch)
  const { deductLife } = bindActionCreators(actionCreators, dispatch)
  const { addPoint } = bindActionCreators(actionCreators, dispatch)
  const { wrongAttempt } = bindActionCreators(actionCreators, dispatch)

  const level = useSelector(state => state.level)


  useEffect(() => {
    localStorage.setItem('level', level)
  }, [])

  const [loading, setLoading] = useState(false);


  function checkAns() {
    setLoading(true);
    axios.post(`http://65.0.74.234:8989/checkAns/${props.ans}/${props.questionNumber}`)
      .then((data) => {
        setLoading(false);
        if (data.data === true) {
          levelup(1);
          addPoint(10);
          console.log(level);
        }
        else {
          wrongAttempt(1);
        }
      })
  }

  function increaseLevel() {
    levelup(1);
  }




  return (!loading)?
   (
    <>
      <button type="button" class="btn btn-primary" onClick={() => { checkAns() }}>Submit</button>
    </>
  ):(<p>Checking ...</p>)
}
