import React from 'react'
import style from './styles.module.css'
import Banner from '../../Banner'

export default function SectionBanners() {
    return (
        <section className='container'>
            <div className={style.selected}>
                <Banner banners="https://homemnoespelho.com.br/wp-content/uploads/2018/12/Copy-of-Copy-of-Homem-No-Espelho-2.jpg" />
                <Banner banners="https://i.pinimg.com/originals/f4/4b/04/f44b04304daac11aebaed9d364dc7614.jpg" />
                <Banner banners="https://www.yeesco.com.br/media/wysiwyg/BANNER_MOBILE_COMBO_3_POR_R_99.png" />
                <Banner banners="https://www.globalmixx.com.br/wp-content/uploads/2017/10/banner-moda-infantil.png" />
            </div>
        </section>
    )
}
