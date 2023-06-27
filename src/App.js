import './App.css';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// React Router
import {BrowserRouter as Router, Switch, Link, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
     
      <Router>

        <Header/>


        <Routes>

          <Route path='/'  element={ <Home/> }>
            holallasa
          </Route>

          <Route path='/movie/:movieId'  element={  <MovieDetails/> }>
             
          </Route>

          <Route path='/hom'>
          
          </Route>

        </Routes>


        <Footer/>

      </Router>
      
      
     
    </>
    
  );
}

export default App;
