import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementAsync
} from '../reducers/counterReducer'
// import axios from 'axios'

export default function Page2 () {
  const { value, status } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  /* React.useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/public/myData.json',
      cancelToken: axios.CancelToken.source().token
    }).then(res => {
        dispatch(incrementByAmount(res.data.amount))
      })
      .catch(err => console.log(err))
  }) */

  return (
    <div id='Page1'>
      <div className='text-center'>
        <h2>Title: Page2</h2>
        <p>Count: {value}</p>
        <button className='btn btn-outline-secondary'
          onClick={() => dispatch(decrement())}
        >-</button>
        <button className='btn btn-outline-secondary'
          onClick={() => dispatch(increment())}
        >+</button>
        <button className='btn btn-outline-secondary'
          onClick={() => {
            dispatch(incrementAsync(3))
            console.log(status)
          }}
        >Async +</button>
      </div>
    </div>
  )
}
