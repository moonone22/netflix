import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'


const MovieList = ({list}) => {
    

    
  return (
    <div>
        <Container>
            <Row>
            {list.map((item ,index)=>{
              
        return <Col key={index}  lg={4}><MovieCard item={item}/></Col>
       })}
            </Row>
            
        </Container>
        
    </div>
  )
}

export default MovieList