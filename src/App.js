import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/movielist/MovieList";
import Moviedetail from "./pages/moviedetail/Moviedetail";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Moviedetail/>}/>
        <Route path='/movies/:type' element={<MovieList/>}/>
        <Route path='/*' element={<h2>Error page</h2>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
