import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  countSelect
} from '../reducers/counterReducer'

export default function Page2 () {
  const count = useSelector(countSelect)
  const dispatch = useDispatch()

  return (
    <div id='Page1'>
      <div className='text-center'>
        <h2>Title: Page2</h2>
        <p>Count: {count}</p>
        <button className='btn btn-outline-secondary'
          onClick={() => dispatch(decrement())}
        >-</button>
        <button className='btn btn-outline-secondary'
          onClick={() => dispatch(increment())}
        >+</button>
      </div>
    </div>
  )
}
