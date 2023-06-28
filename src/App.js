import './App.css';
import Home from './Pages/Home/Home';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
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

          <Route path='/'  element={ <Home/> }> </Route>

          <Route path='/movie/:movieId'  element={  <MovieDetails/> }> </Route>

        </Routes>


        <Footer/>

      </Router>
      
    </>
    
  );
}

export default App;
