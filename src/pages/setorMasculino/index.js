import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
// import sectionCards from '../sectionCards/Card'


export default function setorMasculino() {

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
                            <section className={styles.card}>
                                <Card
                                    thumbnail="https://imgcentauro-a.akamaihd.net/900x900/94982202/bermuda-nike-monster-mesh-5-0-masculina-img.jpg"
                                    title="Bermuda"
                                    price="R$ 180,00"

                                />
                                <Card
                                    thumbnail="https://images-americanas.b2w.io/produtos/3102307601/imagens/mais-grossa-de-veludo-com-capuz-imprimir-suit-longo-juventude-luva-sports-men-sweater-f/3102307652_1_xlarge.jpg"
                                    title="Conjunto de Moleton"
                                    price="R$ 140,00"
                                />
                                <Card
                                    thumbnail="https://cf.shopee.com.br/file/2b36a76a146ed36b1369185b56138eb0"
                                    title="Calça Jeans"
                                    price="R$ 40,00"
                                    
                                />
                            </section>

                            {/* <section className={styles.card2}>
                                <Card
                                    thumbnail="https://i.pinimg.com/originals/cc/02/23/cc0223936ab671be4f4144a31a155df7.jpg"
                                    title="Roupa Social"
                                    price="R$ 220,00"
                                />
                                <Card
                                    thumbnail="https://img.lojasrenner.com.br/item/600580416/large/1.jpg"
                                    title="Camisas"
                                    price="R$ 80,00"
                                />
                                <Card
                                    thumbnail="https://www.barony.com.br/10403-large_default/camisas-masculinas-manga-comprida-com-estampas-de-retalhos-e-listras.jpg"
                                    title="Blusa"
                                    price="R$ 80,00"
                                />
                            </section> */}
                        </section>
                    </main>
                </div>
            </section>
        </>
    )
}