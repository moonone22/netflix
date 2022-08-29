import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import gold from '../img/gold.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const SlideMovies = ({movie}) => {
console.log(movie)
  return (
    <div>
      
<Carousel responsive={responsive}>
  {movie.results.map((item,index)=>(
    <div className='rankBox' key={index}>
    <h1>{index+1==1?<img width={60} src={gold}/>:index+1+"위"}</h1>
    <MovieCard item={item}/>
    </div>
  ))}

</Carousel>;
    </div>
  )
}

export default SlideMovies