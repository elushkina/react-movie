import React from 'react'
import styles from './LandingPage.module.css'
import { getPhotoPreview } from '../../api/api';


export const LandingPage = ({popularMovies, loadMovies}) => {
    return (    
            <div className={styles.container}>
                {popularMovies.map((movie) => {
                    return (
                        <div className={styles.container_item} tabIndex='0'>
                            <img alt='movie_preview' src={getPhotoPreview(movie.poster_path)}/>
                            <span>{movie.title}</span>
                        </div>
                    )
                })}
                <button onClick={loadMovies}>Show more</button>
            </div>
    )
}