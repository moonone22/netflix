import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/action'
import { reduxActions } from '../redux/reduce/reduce'

import Form from 'react-bootstrap/Form';

const Year = () => {
    const dispatch = useDispatch()
    const {year} = useSelector(state => state.state1)
    const {text} = useSelector(state => state.state1.nowInnerText)
    
    const years = (e) => {
      console.log(e.target.innerText)
        dispatch(reduxActions.changyear({
          year:e.target.innerText,
      }))
      dispatch(movieAction.getVote(text))
      }


    const [value,setValue] = useState(2022)

     const inputvalue = (e) => {
      setValue(e.target.value)
      dispatch(reduxActions.changyear({
          year:e.target.value,
      }))
      dispatch(movieAction.getVote(text))
      }
     
      
    
  return (
    <div>
       
        {/* <button onClick={years}>2015</button>
        <button onClick={years}>2016</button>
        <button onClick={years}>2017</button>
        <button onClick={years}>2018</button>
        <button onClick={years}>2019</button>
        <button onClick={years}>2020</button>
        <button onClick={years}>2021</button>
        <button onClick={years}>2022</button> */}

      <div>
     
     
      <div className="yearBox">
         <h1>연도별</h1>
         <h1>{value}</h1>
          <div className="range">
            <input type="range" min="1990" max="2022" value={value} onChange={inputvalue}/>
          </div>
      </div>
      
     
    </div>
    </div>
  )
}

export default Year