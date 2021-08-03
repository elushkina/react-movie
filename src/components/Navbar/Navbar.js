import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a >Фильмы</a>
            <a>Сериалы</a>
            <a>Мультфильмы</a>
            <a>Новости</a>
        </nav>
    )
}