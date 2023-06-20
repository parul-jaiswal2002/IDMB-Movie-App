import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Skeleton ,  {SkeletonTheme} from 'react-loading-skeleton'
import './card.css'

export default function Card({movie}) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])
  return (
    <>
        {
            isLoading ?
            <div className='cards'>
                 <SkeletonTheme color='#202020' highlightColor='#444'>
                    <Skeleton height={300} duration={2}/>
                 </SkeletonTheme>

            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{color: 'white', textDecoration: 'none'}}>
                <div className='cards'>
                    <div className='cardsImage'>
                        <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ''}`}/>
                        <div className='cardsOverlay'>
                            <div className='cardsOverlay_title'>{movie ? movie.original_title : ''}</div>
                            <div className='cardsOverlay_runtime'>
                                {movie ? movie.release_date : ''}
                                <span className='cardsOverlay_review'>{movie ? movie.vote_average : ''}</span>
                                <i class="fas fa-star"></i>{" "}
                            </div>
                            <div className='cardsOverlay_description'>{movie ? movie.overview.slice(0,118) + "..." : ''}</div>
                        </div>
                    </div>
                </div>
            </Link>
        }
        </>

  )
}
