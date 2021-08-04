import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <NavLink to={'/'}>
                    <span>ПоискКино</span>
                </NavLink>
                <input type='text'
                       placeholder='Фильмы, сериалы, персоны'/>
                <a>Войти</a>
            </div>
        </header>
    )
}