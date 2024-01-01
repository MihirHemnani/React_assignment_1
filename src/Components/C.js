import React from 'react'
import { useSelector } from 'react-redux'

const C = () => {
    const state = useSelector(state => state)
  return (
    <div className='m-5'>
        <h1>
            {state}
        </h1>
    </div>
  )
}

export default C