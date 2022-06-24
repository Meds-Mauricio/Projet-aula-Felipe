import React from 'react'
import style from './styles.module.css'

export default function Card({ imagem, title, price, size, link }) {
    return (
        <section className={style.container}>
            <div className={style.imagens}>
                <img src={imagem} />
                <div className='atributos'>
                    <p>{title}</p>
                    <p>{price}</p>
                    <p>{size}</p>
                    <button onClick={() => window.location.href = link}>Comprar</button>
                </div>
            </div>
        </section>
    )
}