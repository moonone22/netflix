import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'


const Recomend = ({recommends}) => {
  return (
    <div className='recommends'>
      <Container>
      <Row>
        {recommends.results.map((item,index)=>(
  
              <Col lg={3} className="recomendBox"  key={index}>
                <div className='detailCard'>
                <MovieCard  item={item} />
                </div>
              </Col>
      ))}
       </Row>
      </Container>
       
          
      

    </div>


  )
}

export default Recomend

//https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/
//https://www.themoviedb.org/t/p/original/
////https://www.themoviedb.org/t/p/w500/