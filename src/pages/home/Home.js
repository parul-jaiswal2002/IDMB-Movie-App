import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import './home.css'
import MovieList from '../../components/movielist/MovieList';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState('')
  useEffect(() => {
      try{
         let fetchapi = async () => {
             let response =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4c5379037ad191054a0f82ba56db3feb&language=en-US')
             let data = await response.json();
             console.log(data.results)
             setPopularMovies(data.results)
         }
         fetchapi()
      }
      catch(err){
          console.log(err)
      }
      
  }, [])

  return (
    <div className='poster'>
        <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={2}
        infiniteLoop={true}
        >
                {
                  popularMovies.map(movie => (
                    <Link style={{textDecoration : "none", color:"white"}} to={`/movie/${movie.id}`}>
                      <div className='poster-image'>
                      <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                    </div>
                    <div className='posterImage-overlay'>
                        <div className='posterImage-title'>{movie ? movie.original_title : ""}</div>
                        <div className='posterImage-runtime'>
                           {movie ? movie.release_date : ""}
                           <span className='posterImage-ratings'>
                            {movie ? movie.vote_average : ""}
                            <i class="fas fa-star"></i>{" "}
                           </span>
                        </div>
                        <div className='posterImage-discription'>{movie ? movie.overview : ''}</div>
                    </div>
                    </Link>
                  ))
                }
            </Carousel>
         <MovieList/>
        
      
    </div>
  )
}
