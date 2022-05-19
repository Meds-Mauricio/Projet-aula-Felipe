import React from 'react'
import style from './styles.module.css'
import Banner from '../../Banner'

export default function SectionBanners() {
    return (
        <section className='container'>
            <div className={style.selected}>
                <Banner src="https://homemnoespelho.com.br/wp-content/uploads/2018/12/Copy-of-Copy-of-Homem-No-Espelho-2.jpg" />
                <Banner src="https://i.pinimg.com/originals/f4/4b/04/f44b04304daac11aebaed9d364dc7614.jpg" />
                <Banner src="https://www.yeesco.com.br/media/wysiwyg/BANNER_MOBILE_COMBO_3_POR_R_99.png" />
                <Banner src="https://www.globalmixx.com.br/wp-content/uploads/2017/10/banner-moda-infantil.png" />
            </div>
        </section>
    )
}

// const slides = [
//     {
//         texto: "/",
//         imagemBanner: "https://homemnoespelho.com.br/wp-content/uploads/2018/12/Copy-of-Copy-of-Homem-No-Espelho-2.jpg",
//     },
//     {
//         texto: "/",
//         imagemBanner: "https://www.globalmixx.com.br/wp-content/uploads/2017/10/banner-moda-infantil.png",
//     },
//     {
//         texto: "/",
//         imagemBanner: "https://i.pinimg.com/originals/f4/4b/04/f44b04304daac11aebaed9d364dc7614.jpg",
//     },
// ];

// export default function SectionBanners() {
    // const [showHome, setShowHome] = useState(false);

    // function renderSlides({ item }) {
    //     return (
    //         <div style={{ flex: 1 }}>
    //             <imagemBanner
    //                 source={item.imagemBanner}
    //                 style={{
    //                     resizeMode: 'cover',
    //                     height: '473px',
    //                     width: '100%',
    //                 }}
    //             />
    //             <><texto /></>
                

    //         </div>
    //     )
    // }

    // if (showHome) {
    //     return <texto> Entrou na Home</texto>
    // } else {
    //     return (
    //         <AppIntroSlider
    //             renderItem={renderSlides}
    //             data={slides}
    //             activeDotStyle
    //         />
    //     );
    // }