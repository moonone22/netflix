import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import DropDownSort from '../component/DropDownSort'
import Genres from '../component/Genres'
import MovieList from '../component/MovieList'
import Pagenation from '../component/Pagenation'
import Year from '../component/Year'
import { movieAction } from '../redux/action/action'
import { Spinner } from 'react-bootstrap';

const Movies = () => {

const dispatch = useDispatch()
const movieList = useSelector(state=>state.state1.movieList)
const loading = useSelector(state=>state.state1.movieListLoading)
const movieList2 = useSelector(state=>state.state1.movieList2)




const list = {
  page:1,
}


useEffect(()=>{
  dispatch(movieAction.getMovieList(list))
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
      <Container >
        <Row>
          <Col>
            <div className='optionMovie'>
                <DropDownSort />
                
                  <Year/>
                

                <Genres/>  
            </div>
          </Col>
          <Col>
            <div className='resultMovies'>
              <MovieList list={movieList}/>
              <Pagenation page={movieList2.total_pages}/>
            </div>
            </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Movies