import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieAction } from '../redux/action/action'
import { Col, Container, Row } from 'react-bootstrap'
import ModalButton from '../component/ModalButton'
import Review from '../component/Review'
import Recomend from '../component/Recomend'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreditPerson from '../component/CreditPerson'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Spinner } from 'react-bootstrap';
import adult from '../img/18.PNG'
import orangestar from '../img/orangeStar.png'
import calinder from '../img/calendar.PNG'


const MovieDetail = () => {
  const [key, setKey] = useState('home');
  const {id} = useParams()
  const dispatch = useDispatch()
  const loading = useSelector(state=>state.state2.loading)
  const {detailMovies,detailReview,recommend,video,credit} = useSelector(state=>state.state2)
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  useEffect(()=>{
    dispatch(movieAction.getDetail(id));
  },[id])
  
  if(loading){
    return(
     <div className='loadingPage'>
        <Spinner size="xll" animation="border" role="status" variant='light' >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
     </div>
      
      )
  }
  return (
    
    <div className='detailBox'>
      
      <Container>
        <Row>
          <Col className='leftbox'>
             {detailMovies.adult ? <img width={500} src={adult}/> : <img src={`https://www.themoviedb.org/t/p/w500/${detailMovies.poster_path}`}/>}
          </Col>
          <Col className='rightbox'>
          <h1>{detailMovies.title}</h1>
            <p>{detailMovies.tagline}</p>
            <span className='spantag'><img width={25} src={orangestar}/>{detailMovies.vote_average}</span>
            <span className='spantag'><img width={20} src={calinder}/>{detailMovies.release_date}</span>
            <span className='spantag underText'>{detailMovies.adult ? "청소년관람불가" : "Under 18"}</span>
            <div className='detailOverview'>
             <p>{detailMovies.overview}</p>
            </div>
            <ul className='DetailBudge'>
              <li>
                <span className="budgeBox">Budget</span>
                $ {detailMovies.budget}
              </li>
              <li>
                <span className="budgeBox">Revenue</span>
                $ {detailMovies.revenue}
              </li>
              <li>
                <span className="budgeBox">Release Day</span>
                 {detailMovies.release_date}
              </li>
              <li>
                <span className="budgeBox">Time</span>
                {detailMovies.runtime}분
              </li>
            </ul>

            <div>
              <ModalButton video={video && video} title={detailMovies.title}/>
            </div>
          </Col>
          
          <div className='creditBox'>
          <h1>출연진</h1>
          <Carousel responsive={responsive}>
              {credit.map((item) => <CreditPerson item={item}/>)}
          </Carousel>
          </div>

        </Row>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
        <Tab eventKey="home" title={`리뷰(${detailReview.results.length})`}>
                <Review detailReviews={detailReview}/>
        </Tab>
        <Tab eventKey="profile" title={`추천영화(${recommend.results.length})`}>
                <Recomend recommends={recommend}/>
        </Tab>
      
      </Tabs>
      </Container>
    
    </div>
  )
}

export default MovieDetail