import React from 'react'
import styles from './LandingPage.module.css'
import { getPhotoPreview } from '../../api/api';
import { NavLink } from 'react-router-dom'


export const LandingPage = ({popularMovies, loadMovies}) => {
    return ( 
        <div>   
            <h1 className={styles.popularFilms}> Популярные фильмы</h1>
            <div className={styles.container}>
                {popularMovies.map((movie) => {
                    return (
                        <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                            <div className={styles.container_item} tabIndex='0' >
                                <img alt='movie_preview' src={getPhotoPreview(movie.poster_path)}/>
                                <span>{movie.title}</span>
                            </div>
                        </NavLink>
                    )
                })}
                
            </div>
            <button className={styles.container__button} onClick={loadMovies}>Show more</button>
        </div>
    )
}