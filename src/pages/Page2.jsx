import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementIfOdd,
  incrementAsync
} from '../reducers/counterReducer'

export default function Page2 () {
  const { value, status } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log(status)
    if (status === 'idle') {
      dispatch(incrementAsync())
    }
  }, [status, dispatch])

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
          onClick={() => dispatch(incrementIfOdd(1))}
        >Odd +</button>
        <button className='btn btn-outline-secondary'
          onClick={() => dispatch(incrementAsync())}
        >Async +</button>
      </div>
    </div>
  )
}
