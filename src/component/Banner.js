import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const Banner = ({movie}) => {
    const navigate = useNavigate()
    const goToDetail = () => {
        navigate(`/movies/${movie.id}`)
        window.scrollTo(0,0) //페이지 상단이동
       }
    return (
      <div 
      className='banner'
      style={{
          backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`}}>
                  <div className='banner_info'>
                      <h1>{movie.title}</h1>
                      <p>{movie.overview.length > 30 ? `${movie.overview.slice(0, 30)}...` : movie.overview}</p>
                      <button onClick={goToDetail} className='bannerBtn'>자세히보기</button>
                  </div>
      </div>  
      )
}

export default Banner