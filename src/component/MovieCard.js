import React, { useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/action';
import { AnimatePresence,motion } from "framer-motion"
import {useMatch, useNavigate} from "react-router-dom"
import {useScroll} from "framer-motion"
import { reduxActions2 } from '../redux/reduce/reduce2';
import orangestar from '../img/orangeStar.png'
import adult from '../img/18.PNG'
import adult2 from '../img/19.PNG'
import { FaInfoCircle } from 'react-icons/fa';
import { BsPlusCircleFill } from 'react-icons/bs';

const MovieCard = ({item}) => {

const dispatch = useDispatch()
  
const {genres} = useSelector(state => state.state1.genresList)
const nowMyMovie = useSelector(state => state.state2.myMovie)

const navigate = useNavigate()


const goToDetail = () => {
 navigate(`/movies/${item.id}`)
 window.scrollTo(0,0) //페이지 상단이동
}

const bigMovieMatch = useMatch("/movieModal/:movieId")


const mymovieAdd = (item) => {
  if(nowMyMovie.some((a) => a.id == item.id))
  return ;
  
  return dispatch(reduxActions2.pushMymovie(item))
  
}
  return (
    <>
    <motion.div 
        whileHover={{ scale: 1.2, y:-30, zIndex:999}}
        className='cardMovie'
        style={{
            backgroundImage: item.poster_path 
                    ? (item.adult ? `url(${adult2})` : `url(https://www.themoviedb.org/t/p/w500/${item.poster_path})`)

                    : "url(https://usagi-post.com/wp-content/uploads/2020/05/no-image-found-360x250-1.png)"
        }}
    >

   

      <div className='overlay'>

      <h1>{item.title}</h1>    

      <div>
        {item.genre_ids.map((id,index)=>{
          return  <Badge bg="danger" key={index}>{genres.find((item)=>{return item.id == id}).name}</Badge>
        
        })}
      </div>

      <div className='voteAverage'>
        <img width={25} src={orangestar}/>
        <span>{item.vote_average}</span>
      </div>

      <span className='underText'>{item.adult ? <img width={30} src={adult}/> : "under 18"}</span>
      <div className='cardBottom'>
        <motion.div whileTap={{
      scale: 0.8,
      borderRadius: "-100%"
    }} whileHover={{ scale: 1.2}}><FaInfoCircle onClick={goToDetail}/></motion.div>
        <motion.div whileTap={{
      scale: 0.8,
      rotate:360,
      borderRadius: "-100%"
    }}  whileHover={{ scale: 1.2,}}><BsPlusCircleFill onClick={()=>{mymovieAdd(item)}}/></motion.div>
      </div>
    </div>
    </motion.div>
     
     </>
  )
}

export default MovieCard
//<Badge bg="danger">{item}</Badge>