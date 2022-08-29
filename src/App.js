
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navgation'
import Mymovie from './pages/Mymovie';


function App() {
  return (
    <div className='back'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetail/>}/>
        <Route path='/mymovie' element={<Mymovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
