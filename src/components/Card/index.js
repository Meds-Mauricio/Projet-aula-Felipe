import React from 'react'
import style from './styles.module.css'

export default function Card({ imagem, title, price, size, link }) {
    return (
        <section className={style.container}>
            <div className={style.imagens}>
                <div className='atributos'>
                    <img src={imagem} />
                    <p>{title}</p>
                    <p>{price}</p>
                    <p>{size}</p>
                    <button onClick={() => window.location.href = link}>Comprar</button>
                </div>
            </div>
        </section>
    )
}