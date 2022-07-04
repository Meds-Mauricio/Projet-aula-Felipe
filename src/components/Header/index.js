import React from 'react'
import style from './styles.module.css'
import Container from '../Container'

export default function Header() {
    return (
        
        <section className={style.container}>
            <Container>
            <nav className={style.navHome}>
                <div className={style.logo}>
                    <a href='/'>
                        <img src='./logo_namoda.png' />
                    </a>
                </div>

                <ul className={style.linkPrincipal}>
                    <a href='/'>Home</a>
                    <a href='/setorMasculino'>Moda Masculina</a>
                    <a href='/setorFeminina'>Moda Feminina</a>
                </ul>
            </nav>
            </Container>
        </section>
       
    )
}