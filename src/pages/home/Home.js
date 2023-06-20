import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movielist/MovieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home








// import React, { useEffect, useState } from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import {Link} from 'react-router-dom'
// import './home.css'
// import MovieList from '../../components/movielist/MovieList';

// export default function Home() {
//   const [popularMovies, setPopularMovies] = useState('')
//   useEffect(() => {
//       try{
//          let fetchapi = async () => {
//              let response =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4c5379037ad191054a0f82ba56db3feb&language=en-US')
//              let data = await response.json();
//              console.log(data.results)
//              setPopularMovies(data.results)
//          }
//          fetchapi()
//       }
//       catch(err){
//           console.log(err)
//       }
      
//   }, [])

//   return (
//     <div className='poster'>
//         <Carousel
//         autoPlay={true}
//         showThumbs={false}
//         showStatus={false}
//         transitionTime={2}
//         infiniteLoop={true}
//         >
//                 {
//                   popularMovies.map(movie => (
//                     <Link style={{textDecoration : "none", color:"white"}} to={`/movie/${movie.id}`}>
//                       <div className='poster-image'>
//                       <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
//                     </div>
//                     <div className='posterImage-overlay'>
//                         <div className='posterImage-title'>{movie ? movie.original_title : ""}</div>
//                         <div className='posterImage-runtime'>
//                            {movie ? movie.release_date : ""}
//                            <span className='posterImage-ratings'>
//                             {movie ? movie.vote_average : ""}
//                             <i class="fas fa-star"></i>{" "}
//                            </span>
//                         </div>
//                         <div className='posterImage-discription'>{movie ? movie.overview : ''}</div>
//                     </div>
//                     </Link>
//                   ))
//                 }
//             </Carousel>
//          <MovieList/>
        
      
//     </div>
//   )
// }
