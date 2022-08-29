import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import img from "../img/logo.PNG"
import { movieAction } from '../redux/action/action';
import { motion, useScroll} from "framer-motion"
import { BiSearchAlt } from 'react-icons/bi';

const Navgation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const homeMatch = useMatch("/")
  const moviesMatch  = useMatch("/movies")
  const myMatch  = useMatch("/mymovie")
  const {scrollY} = useScroll()
  

  const searchMovie = (e) =>{
    e.preventDefault()
    navigate("/movies")
    dispatch(movieAction.getSearchMovie(e.target[0].value))

  }
  
const logoVariants = {
  initial: {
        fillOpacity:1,
        pathLength:0,
    },
    active: {
        fillOpacity:[0, 1, 0],
        pathLength:1,
        transition: {
            repeat:Infinity,
        }
    },
    animate:{
      fillOpacity:1,
        pathLength:0,
    },

    


}

  return (
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">
      <div className='LOGO'>
      <Link to ="/">
      <motion.svg
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="active"
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="276.742"
                viewBox="0 0 1024 276.742"
        >
                <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
            </motion.svg>
            </Link>
      </div>
     
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to ="/" className='nav-item'>Home {homeMatch && <motion.span layoutId='circle' className="Circle"></motion.span>}</Link>
          <Link to="/movies"  className='nav-item'>Movies {moviesMatch && <motion.span layoutId='circle' className="Circle"></motion.span>}</Link>
          <Link to="/mymovie"  className='nav-item'>My Movie {myMatch && <motion.span layoutId='circle' className="Circle"></motion.span>}</Link>
          
         
        </Nav>
        <Form onSubmit={searchMovie} className="d-flex">
          <Form.Control
            type="search"
            placeholder="영화검색"
            className="me-2"
            aria-label="Search"
          />
         <button className='searchBtn'> <BiSearchAlt/> </button>
         
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navgation