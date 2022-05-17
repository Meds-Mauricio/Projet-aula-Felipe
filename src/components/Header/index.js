import React from 'react'
import style from './styles.module.css'

export default function Header() {
    return (
        <section className={style.header}>
            <div className={style.headerForm}>
                <h1>Na Moda</h1>
            </div>
            <nav className={style.navHome}>
                <ul className={style.linkPrincipal}>
                    <a href='/'>Home</a>
                    <a href='/setorMasculino'>Moda Masculino</a>
                    <a href='/setorFeminina'>Moda Feminina</a>
                    <a href='/setorInfantil'>Moda Infantil</a>
                    <a href='/contato'>Contatos</a>
                </ul>
            </nav>
        </section>

    )
}
