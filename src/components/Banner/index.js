import style from './styles.module.css'
import React from 'react'

export default function Banner({ src }) {
    return (
        <section>
            <img src={src} alt="" className={style.imgBanners} />
        </section>
    )
}