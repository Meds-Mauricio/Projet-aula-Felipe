import style from './styles.module.css'
import React from 'react'

export default function Banner({ banners }) {
    return (
        <div>
            <img src={banners} alt="" className={style.imgBanners} />
        </div>
    )
}