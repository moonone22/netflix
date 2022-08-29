import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/action'
import { reduxActions } from '../redux/reduce/reduce'

const Genres = () => {
    const dispatch = useDispatch()
    const {year} = useSelector(state => state.state1)
    const {text} = useSelector(state => state.state1.nowInnerText)
    const {num} = useSelector(state => state.state1.genres)
    const [active,setActive] = useState(true)
    
    
    const GG = useSelector(state => state.state1.genresList)
   

useEffect(()=>{
    dispatch(movieAction.getGenres())
},[])

    const genres = (e) => {
        e.target.className = "toggleGenres"

        setActive(false)
    
        dispatch(reduxActions.changegenres(e.target.id))

      dispatch(movieAction.getVote(text))
      }

      const delet = (e) => {
        e.target.className = "noToggle"

        setActive(true)
      
        dispatch(reduxActions.deletegenres(e.target.id))

      dispatch(movieAction.getVote(text))
      }
      //더블클릭하면 현재 장르의 num배열을 꺼내와서
      //클릭한 e.target.innerText와 같은 값을 필터로 지우고 다시 배열을 num 배열로 넣어준다.

 

    

  return (
    <div className='gBox'>
         <h1>장르별</h1>
        {GG.genres && GG.genres.map((item) => {
        return <button className='noToggle' id={item.id} key={item.id} onClick={active ? genres : delet}>{item.name}</button>
        })}

    </div>
  )
}

export default Genres



