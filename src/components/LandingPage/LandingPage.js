import React from 'react'
import styles from './LandingPage.module.css'
import {IMAGE_URL} from "../../api/config";


export const LandingPage = ({popularMovies}) => {
    return (
            <div className={styles.container}>
                {popularMovies.map((movie) => {
                    return (
                        <div className={styles.container_item}>
                            <img alt='movie_preview' src={`${IMAGE_URL}w200${movie.poster_path}`}/>
                            <span>{movie.title}</span>
                        </div>
                    )
                })}
                <button>Show more</button>
            </div>
    )
}