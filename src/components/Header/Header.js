import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <span>ПоискКино</span>
                <input type='text'
                       placeholder='Фильмы, сериалы, персоны'/>
                <a>Войти</a>
            </div>
        </header>
    )
}