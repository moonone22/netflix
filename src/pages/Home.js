import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner';
import SlideMovies from '../component/SlideMovies';
import RankMovies from '../component/RankMovies';
import { movieAction } from '../redux/action/action';
import { useMatch } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { bindActionCreators } from 'redux';
import { Spinner } from 'react-bootstrap';
 
const Home = () => {
  const dispatch = useDispatch();
  const {popular,topRate,upComing,loading} = useSelector(state=>state.state1)
  console.log(popular)

  useEffect(()=>{
    dispatch(movieAction.getMovies())
    dispatch(movieAction.getGenres())
  },[])

  
 
  if(loading){
    return <div className='loadingPage'>
    <Spinner size="xll" animation="border" role="status" variant='light' >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
 </div>
  }
  return (
    <div>

      <Banner movie={popular.results[0]}/>
      <h1>인기영화</h1>
      <SlideMovies movie={popular}/>
      <h1>영화랭킹</h1>
      <RankMovies movie={topRate}/>
      <h1>개봉예정작</h1>
      <SlideMovies movie={upComing}/>

   
        
    </div>
  )
}

export default Home