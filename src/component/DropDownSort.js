import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/action';
import { reduxActions } from '../redux/reduce/reduce';

const DropDownSort = () => {
  const dispatch = useDispatch()
  

const [name , setName] = useState("popularity.desc")
  const vote_average = (e) => {
    setName(e.target.innerText)
    dispatch(reduxActions.changInnerText({text : e.target.innerText}))
    dispatch(movieAction.getVote(e.target.innerText))
  }

 const drop = (e) => {

 }

  return (
    <div className='sortBox'>
     
     <h1>정렬</h1>
      
          <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" >
        {name} 
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        
            <Dropdown.Item onClick={vote_average} >
          popularity.desc
            </Dropdown.Item>

            <Dropdown.Item onClick={vote_average} >
          popularity.asc
            </Dropdown.Item>
            <Dropdown.Item onClick={vote_average}>
          vote_average.desc
          </Dropdown.Item>

          <Dropdown.Item onClick={vote_average} >
          vote_average.asc
            </Dropdown.Item>
         
            <Dropdown.Item onClick={vote_average} >
            release_date.desc
            </Dropdown.Item>
            <Dropdown.Item onClick={vote_average} >
            release_date.asc
            </Dropdown.Item>
            <Dropdown.Item onClick={vote_average} >
          revenue.desc
            </Dropdown.Item>
            <Dropdown.Item onClick={vote_average} >
          revenue.asc
            </Dropdown.Item>
         
         
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropDownSort