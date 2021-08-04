import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails, fetchAboutMovie } from '../../api/api'
import { MovieDetailPage } from './MovieDetailPage'

export const MovieDetailPageContainer = () => {
    const {id} = useParams()
    let [movieInfo, setMovieInfo] = useState({})
    let [aboutMovie, setAboutMovie] = useState({})

    useEffect(() => {
        fetchMovieDetails(id)
            .then((data) => {
                setMovieInfo(data)
                fetchAboutMovie(id)
            })
            .then((data) => {
                setAboutMovie(data)
            })
    }, [id])
   
    return (
        <MovieDetailPage movieInfo={movieInfo} aboutMovie={aboutMovie}/>
    )
}