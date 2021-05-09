import React from 'react'
import { useSelector } from 'react-redux'
import { logo512px } from '../resources'
import { countSelect } from '../reducers/counterReducer'

export default function Page1 () {
  const count = useSelector(countSelect)

  return (
    <div id='Page1'>
      <div className='text-center'>
        <h2>Title: Page1</h2>
        <img src={logo512px} height='128px'/>
        <p>Counter = {count}</p>
      </div>
    </div>
  )
}
