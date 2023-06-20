import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <div>
        <div className='header'>
            <div className='header-left'>
                <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/150px-IMDB_Logo_2016.svg.png'/></Link>
                <Link to='/movies/popular'><span>Popular</span></Link>
                <Link to='/movies/top_rated'><span>Top Rated</span></Link>
                <Link to='/movies/upcoming'><span>Upcoming</span></Link>
            </div>
        </div>
    </div>
  )
}
