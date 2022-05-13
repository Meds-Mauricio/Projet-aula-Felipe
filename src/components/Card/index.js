import React from 'react'
import style from './styles.module.css'

export default function Card({ imagem }) {
    return (
        <div>
            <img src={imagem} alt="" className={style.img} />
        </div>
    )
}
