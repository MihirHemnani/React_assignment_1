import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInput } from '../redux/text/Action'

const B = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const handleClick = (event) => {
        dispatch(changeInput(event.target.value))
    }
    // console.log(state)
  return (
    <div className="m-3">
        Input Text: <input type='text' value={state} className="m-3 border border-solid border-2" onChange={handleClick}/>
    </div>
  )
}

export default B