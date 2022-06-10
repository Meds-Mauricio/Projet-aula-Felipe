import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
// import { FaWhatsappSquare } from 'react-icons/fa';

export default function setorMasculino() {
    const [roupas, setRoupas] = useState()
    let params
    if (typeof window !== 'undefined') {
        params = new URLSearchParams(window.location.search)
    }

    let urlParams = undefined
    params && params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {

            [key]: value.toString()
        })
    })

    console.log(urlParams, 'urlParams')
    // console.log(urlParams?.roupas);

        const renderizarRoupas = () => {
            if (urlParams?.roupas === 'calca') {
                console.log('1')
                return (
                    <section className={styles.calça}>
                        <img src='https://static3.tcdn.com.br/img/img_prod/793834/calca_masculina_jeans_azul_escuro_jeans_161016425_1_20201214193513.jpg' />
                    </section>
                )
            } else if (urlParams?.roupas === 'camisa') {
                console.log('2')
                return (
                    <section className={styles.camisa}>
                        <img src='https://www.chicbest.com/app/media/images_product/big/1239/1239235603-z1-1.jpg' />
                    </section>
                )
            } else if (urlParams?.roupas === 'bermuda') {
                return (
                    <section className={styles.bermuda}>
                        <img src='https://cdnv2.moovin.com.br/santorefugio/imagens/produtos/det/bermuda-jeans-santo-refugio-020147-0008-93c8e145dfa413e93852ac3d300c1ad4.jpg' />
                    </section>
                )
            } else {
                return (

                    <section className={styles.vazio}>
                        <h1>Não tem mais roupas</h1>
                    </section>
                )
            }
        }
        return setRoupas(renderizarRoupas)


    useEffect(() => {
        const renderizarTamanho = () => {
            if (urlParams?.tamanho === 'tamanho Pequeno' && urlParams?.roupas === 'camisa') {
                return (
                    <section className={styles.roupaP}>
                        <img src='https://m.media-amazon.com/images/I/71qjmJhDydL._AC_SX385_.jpg' />
                    </section>
                )
            } else if (urlParams?.tamanho === 'tamanho Medio') {
                return (
                    <section className={styles.roupaM}>
                        <img src='https://img.elo7.com.br/product/main/1A1F834/camiseta-masculina-terra-media-senhor-dos-aneis-estampa-total-print.jpg' />
                    </section>
                )
            } else if (urlParams?.tamanho === 'tamanhoGrande') {
                return (
                    <section className={styles.roupaG}>
                        <img src='https://http2.mlstatic.com/D_NQ_NP_860388-MLB40375909755_012020-O.jpg' />
                    </section>
                )
            } else if (urlParams?.plusSize === 'tamanho PlusSize') {
                return (
                    <section className={styles.roupaPs}>
                        <img src='https://a-static.mlcdn.com.br/1500x1500/kit-5-camisa-masculina-plus-size-g1-g2-g3-imperios/imperiosmodas/7879862259/40840492dbaf1b94ecdac05349a3c9ce.jpg' />
                    </section>
                )
            } else {
                return <h1>não tem mais camisas</h1>
            }
        }
        return setRoupas(renderizarTamanho)
    }, []);

    useEffect(() => {
        const renderizarTamanho1 = () => {
            if (urlParams?.tamanho === 'tamanhoPequeno' && urlParams?.roupas === 'calça') {
                return (
                    <section className={styles.roupaP}>
                        <img src='https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2015/07/calca-skinny-camiseta-basica-branca.jpg' />
                    </section>
                )
            } else if (urlParams?.tamanho === 'tamanhoMedio') {
                return (
                    <section className={styles.roupaM}>
                        <img src='https://lojasgang.vteximg.com.br/arquivos/ids/271502/310301300499-calca-reta-blue-medio-gang3.jpg' />
                    </section>
                )
            } else if (urlParams?.tamanho === 'tamanhoGrande') {
                return (
                    <section className={styles.roupaG}>
                        <img src='https://http2.mlstatic.com/D_NQ_NP_701859-MLB41152034531_032020-W.jpg' />
                    </section>
                )
            } else if (urlParams?.plusSize === 'tamanhoPlusSize') {
                return (
                    <section className={styles.roupaPs}>
                        <img src='https://static.zattini.com.br/produtos/calca-jeans-skinny-biotipo-stone-plus-size-masculina/25/G05-0873-325/G05-0873-325_zoom1.jpg' />
                    </section>
                )
            } else {
                return (
                    <section className={styles.vazio}>
                        <h1>não tem mais roupas</h1>
                    </section>
                )
            }
        }
        return setRoupas(renderizarTamanho1)
    }, []);

    useEffect(() => {
        const renderizarTamanho2 = () => {
            if (urlParams?.tamanho === 'tamanhoPequeno' && urlParams?.roupas === 'Bermuda') {
                return (
                    <section className={styles.roupaP}>
                        <img src='https://images.lojanike.com.br/1024x1024/produto/shorts-nike-just-do-it-masculino-DH9983-100-1-11629902950.jpg' />
                    </section>
                )
            } else if (urlParams?.tamanho === 'tamanhoMédio') {
                return (
                    <section className={styles.roupaM}>
                        <img src='https://idealvestrouparia.com.br/wp-content/uploads/2021/11/15095467504_254942482_1020828965438882_1299756647934441103_n.jpg' />
                    </section>
                )
            } else if (urlParams?.tamanho === 'tamanhoGrande') {
                return (
                    <section className={styles.roupaG}>
                        <img src='https://m.media-amazon.com/images/I/61cP8FPGUSS._AC_SX385_.jpg' />
                    </section>
                )
            } else if (urlParams?.plusSize === 'tamanhoPlusSize') {
                return (
                    <section className={styles.roupaPs}>
                        <img src='https://img.elo7.com.br/product/zoom/2E007D7/bermuda-de-sarja-estampada-masculina-plus-size-50-ao-74-76-bermuda-grande-com-stretch.jpg' />
                    </section>
                )
            } else {
                return (
                    <section>
                        <h1>não tem mais roupas</h1>
                    </section>
                )
            }
        }
        return setRoupas(renderizarTamanho2)
    }, []);

    const click = () => {
        window.location.href = "/cadastro"
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <Head>
                        <title>Moda Masculina</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main className={styles.main}>
                        <h1>Moda Masculina</h1>
                        <section className={styles.grid}>

                            <div className={styles.renderizar}>
                                <div>

                                </div>
                                {roupas}
                                <div>
                                    {/* {renderizarTamanho()} */}
                                </div>

                                <div>
                                    {/* {renderizarTamanho1()} */}
                                </div>

                                <div>
                                    {/* {renderizarTamanho2()} */}
                                </div>
                            </div>

                            {/* <section className={styles.card}> */}
                            {/* <div onClick={click}>
                                    <Card
                                        thumbnail="https://imgcentauro-a.akamaihd.net/900x900/94982202/bermuda-nike-monster-mesh-5-0-masculina-img.jpg"
                                        title="Bermuda"
                                        price="R$ 80,00"
                                    />
                                </div>
                                <div onClick={click}>
                                    <Card
                                        thumbnail="https://images-americanas.b2w.io/produtos/3102307601/imagens/mais-grossa-de-veludo-com-capuz-imprimir-suit-longo-juventude-luva-sports-men-sweater-f/3102307652_1_xlarge.jpg"
                                        title="Conjunto de Moleton"
                                        price="R$ 140,00"
                                    />
                                </div>
                                <div onClick={click}>
                                    <Card
                                        thumbnail="https://cf.shopee.com.br/file/2b36a76a146ed36b1369185b56138eb0"
                                        title="Calça Jeans"
                                        price="R$ 120,00"
                                    />
                                </div>
                            </section> */}

                            {/* <div className="creatAccount">

                                </div> */}
                            {/* <section className={styles.card2}>
                                <Card
                                    thumbnail="https://i.pinimg.com/originals/cc/02/23/cc0223936ab671be4f4144a31a155df7.jpg"
                                    title="Roupa Social"
                                    price="R$ 220,00"
                                />
                                <Card
                                    thumbnail="https://www.barony.com.br/10403-large_default/camisas-masculinas-manga-comprida-com-estampas-de-retalhos-e-listras.jpg"
                                    title="Camisas"
                                    price="R$ 80,00"
                                />
                                <Card
                                    thumbnail="https://img.lojasrenner.com.br/item/600580416/large/1.jpg"
                                    title="Blusa"
                                    price="R$ 80,00"
                                />
                            </section> */}
                        </section>
                    </main>
                </div >
            </section >
        </>

    )
}
