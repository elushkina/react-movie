import React, {useEffect, useState} from 'react'
import {fetchMovies} from "../../api/api";
import {LandingPage} from "./LandingPage";

export const LandingPageContainer = () => {
    let [popularMovies, setPopularMovies] = useState(null)

    useEffect(() => {
        fetchMovies()
            .then((data) => {
                setPopularMovies(data.results)
            })
    }, [])

    return (
        popularMovies && <LandingPage popularMovies={popularMovies}/>
    )
}
