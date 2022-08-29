import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MyMovieCard from '../component/MyMovieCard'
import { reduxActions2 } from '../redux/reduce/reduce2'
import { Spinner } from 'react-bootstrap';

const Mymovie = () => {
    const dispatch = useDispatch()

    const myMovie = useSelector(state=>state.state2.myMovie)
   

  return (
    <div className='myMovieBBox'>
      <h1>My Movie({myMovie.length})</h1>
      <div className='myMovieBox'>
      <Container>
        <Row>
          
          {myMovie.map((item,index) => (
             <Col xl={3} lg={4} md={6} key={index}>  <MyMovieCard item={item}/> </Col>
          ))}
         
        </Row>
      </Container>
       
      
      </div>
       
    </div>
  )
}

export default Mymovie