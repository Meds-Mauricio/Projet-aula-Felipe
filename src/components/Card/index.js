import React from 'react'
import style from './styles.module.css'

export default function Card({ imagem, title, Price, Size }) {
    return (
        <section className={style.container}>
            <div className={style.imagens}>
                <img src={imagem} />
                {title}
                {Price}
                {Size}
            </div>
        </section>
    )
}