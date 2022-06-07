import React from 'react'
import style from './styles.module.css'

export default function Card({ thumbnail, title, price, }) {
    return (
        <>
            <section className={style.container}>
                <div className={style.thumbnail}>
                    <img src={thumbnail} />
                </div>
                <div className={style.infocontent}>
                    <span className={style.title}>{title}</span>
                    <span className={style.price}>{price}</span>
                </div>
            </section>
        </>
    )
}