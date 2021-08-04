import React, {useEffect, useState} from 'react'
import {fetchMovies} from "../../api/api";
import {LandingPage} from "./LandingPage";

export const LandingPageContainer = () => {
    let [popularMovies, setPopularMovies] = useState([])
    let [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        loadMovies()
    }, [])


    function loadMovies() {
        fetchMovies(currentPage)
            .then((data) => {
                setPopularMovies([...popularMovies,...data.results])
                setCurrentPage(currentPage + 1)
            })
            .catch (() => console.log('error'))
    }
    
    return (
        (popularMovies.length !== 0) && <LandingPage popularMovies={popularMovies} loadMovies={loadMovies}/>
    )
}
