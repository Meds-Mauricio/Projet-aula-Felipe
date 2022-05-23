import React from 'react'
import style from './styles.module.css'

export default function Header() {
    return (
        <section className={style.header}>
            <div className={style.container}>
                {/* <h1>Na Moda</h1> */}
                <img src='./logo_namoda.png'/>
            
            <nav className={style.navHome}>
                <ul className={style.linkPrincipal}>
                    <a href='/'>Home</a>
                    <a href='/setorMasculino'>Moda Masculino</a>
                    <a href='/setorFeminina'>Moda Feminina</a>
                    <a href='/setorInfantil'>Moda Infantil</a>
                    <a href='/cadastro'>Cadastro</a>
                </ul>
            </nav>
            </div>
        </section>

    )
}
