import style from './styles.module.css'
import React from 'react'
import { srcImage } from '../../mock'
export default function Banner() {
    return (
        <section className='container'>
            {srcImage.map((image) => {
                return (
                        <a href='setorMasculino'><img className={style.banner} src={image.src} /></a>
                )
            })}
        </section>
    )
}