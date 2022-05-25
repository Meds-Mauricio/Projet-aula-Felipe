import style from './styles.module.css'
import React from 'react'

export default function Banner() {
    return (
        <section className={style.container}>
        <div className={style.selected}>
            <img className={style.banner} src="https://midia.fotos-riachuelo.com.br/fotos/megamenu/home/2022/maio/ADS-10836/Hero-Acao-Cross-Inverno-ADS-10836-V2.jpg" />
            {/* <img className={style.banner} src="https://i.pinimg.com/originals/f4/4b/04/f44b04304daac11aebaed9d364dc7614.jpg" />
            <img className={style.banner} src="https://www.yeesco.com.br/media/wysiwyg/BANNER_MOBILE_COMBO_3_POR_R_99.png" /> */}
        </div>
        </section>
    )
}