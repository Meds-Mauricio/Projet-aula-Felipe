import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import Header from '../../components/Header'
import SectionsCards from '../../components/SectionBanners/Sections/Cards'
import Footer from '../../components/Footer'

export default function Infantil() {

    const Infantil = {
        masculina: {
            BlusaDeFrio: "https://www.bebevestebem.com.br/image/cache/data/04073-blusa-frio-cinza-chicco-926x926.jpg",
            conjuntoMoleton: "https://d1el7pgrd75iy6.cloudfront.net/Custom/Content/Products/10/04/1004434_conj-moleton-c-cap-aberto-m-inf-4-10-94-09-7_m3_637202289674715280.jpg",
            calças: "https://a-static.mlcdn.com.br/618x463/kit-calca-jeans-infantil-masculino-skinny-com-cinto-mundo-principe/mundoprincipekids2/706606022/9f794097d4b18275a34c022fe841efc1.jpg",
            bermudas: "https://static.cdnlive.com.br/uploads/603/unidade/15675233966892_zoom.jpg",
            camisas: "https://i.pinimg.com/236x/ce/1a/4c/ce1a4c5c1093ebb2dbf4196a90fdec54.jpg",
        },

        feminina: {
            BlusaDeFrio: "https://a-static.mlcdn.com.br/618x463/casaco-blusa-frio-moletom-canguru-infantil-adulto-naruto-akatsuki-lovva/rmcstore/317-7179/32a6d973bc18e853dbe2a5ff73476db9.jpg",
            conjuntoMoleton: "https://www.yoraatacado.com.br/media/catalog/product/cache/1/image/515x515/9df78eab33525d08d6e5fb8d27136e95/c/o/conjunto-moletom-feminino-aberto-com-capuz-girl-13516-abrange_1.jpg",
            calças: "https://img.panoramasistemas.com.br/modalove.img/produto/14447/calca-infantil-feminino-star-menina-doce-14447-large.jpg",
            bermudas: "https://images.tcdn.com.br/img/img_prod/739604/bermuda_ciclista_em_cotton_4_a_8_anos_341_3_20200715201618.jpg",
            camisas: "https://a-static.mlcdn.com.br/618x463/blusa-infantil-feminina-minnie-follow-me-cativa-cativa-malhas/grippon/1027780-1027785/abde774be303313787b14fc2644e610c.jpg",
        }
    }
    return (
        <>
            <Head>
                <title>Moda Infantil</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className={styles.main}>
                <h1>Moda Infantil</h1>
                <SectionsCards />

                {/* {Infantil.Setor.Masculina(roupas =>
                    <Card imagem={roupas.BlusaDeFrio} />
                )} */}
            </main>
            <Footer />
        </>
    )
}