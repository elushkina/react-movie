import React from 'react'
import { getMoviePoster } from '../../api/api'
import styles from './MovieDetailPage.module.css'

export const MovieDetailPage = ({movieInfo, aboutMovie}) => {

    return (
            <div>
               <div className={styles.mainInfo} 
               
               style={{backgroundImage: `url('${movieInfo.backdrop_path && getMoviePoster(movieInfo.backdrop_path)}')`}}>
                   <div className={styles.mainInfo_section}>
               <h1>{movieInfo.title}</h1>
               <h4>{movieInfo.tagline}</h4>
                 </div> 
               </div>
               <div className={styles.movieInfo}>
                    <section className={styles.movieInfo_section}>
                        <h1>{movieInfo.title}</h1>
                        <div>{movieInfo.original_title}</div>
                        <div>
                            <span>О фильме</span>
                            <div>
                                    <div>Дата релиза</div>
                                    <div>{movieInfo.release_date}</div>
                            </div>
                            <div>
                                    <div>Жанр</div>
                                    <div>{'Какой-то'}</div>
                            </div>
                        </div>
                    </section>
                    <h3 className={styles.movieInfo_overview}>{movieInfo.overview}</h3>
               </div>
            </div>
    )
}