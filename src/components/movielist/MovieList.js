import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'
import './movielist.css'

export default function MovieList() {
    const [movielist, setMovielist] = useState([])
    const {type} = useParams()
    useEffect(() => {
        getData()

    },[])
    useEffect(() => {
        getData()
    },[type])
    const getData = () => {
        try{
            let fetchapi = async () => {
                let response =  await fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=4c5379037ad191054a0f82ba56db3feb&language=en-US`)
                let data = await response.json();
                console.log(data.results)
                setMovielist(data.results)
            }
            fetchapi()
         }
         catch(err){
             console.log(err)
         }
    }
  return (
    <div className='movie_list'>
        <h2 className='list_title'>
            {type ? type.toUpperCase() : "POPULAR"}
        </h2>
        <div className='list_cards'>
            {movielist.map(movie => (
                <Card movie={movie}/>
            ))}
        </div>

    </div>
  )
}
