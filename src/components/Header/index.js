import React from 'react'
import style from './styles.module.css'

export default function Header() {
    return (
        <section className={style.header}>
            <div className={style.container}>
                <a href='/'>
                    <img src='./logo_namoda.png' />
                </a>

                <nav className={style.navHome}>
                    <ul className={style.linkPrincipal}>
                        <a href='/'>Home</a>
                        <a href='/setorMasculino'>Moda Masculina</a>
                        <a href='/setorFeminina'>Moda Feminina</a>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
