import React from 'react'
import style from './styles.module.css'

export default function Card({ imagem }) {
    return (
            <section className={style.container}>
                <div className={style.imagens}>
                    <img src={imagem} />
                    <p>Camiseta</p>
                </div>
            </section>
    )
}