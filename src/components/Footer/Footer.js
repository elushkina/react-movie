import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.socialMenu}>
            <ul>
                <li>
                    <a href='http://facebook.com'>
                        <img alt='facebook' src='facebook.svg'/>
                    </a>
                </li>
                <li>
                    <a href='http://instagram.com'>
                        <img alt='instagram' src='instagram.svg'/>
                    </a>
                </li>
                <li>
                    <a href='http://twitter.com' >
                        <img alt='twitter' src='twitter.svg' />
                    </a>
                </li>
            </ul>
            </div>
            <div className={styles.contentMenu} >
            <ul>
                <li>
                    <a href='#'>Вакансии</a>
                </li>
                <li>
                    <a href='#'>Реклама</a>
                </li>
                <li>
                    <a href='#'>Блог</a>
                </li>
                <li>
                    <a href='#'>Предложения</a>
                </li>
                <li>
                    <a href='#'>Соглашение</a>
                </li>
            </ul>
        </div>
        </div>
    )
}