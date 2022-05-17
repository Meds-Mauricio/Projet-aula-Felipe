import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import SectionsCards from '../../components/Sections/Cards'
import styles from './styles.module.css'
export default function Masculina() {

    const Masculina =  {
        BlusaDeFrio:"https://img.lojasrenner.com.br/item/600580416/large/1.jpg",
        conjuntoMoleton:"https://images-americanas.b2w.io/produtos/3102307601/imagens/mais-grossa-de-veludo-com-capuz-imprimir-suit-longo-juventude-luva-sports-men-sweater-f/3102307652_1_xlarge.jpg",
        calças:"https://29664.cdn.simplo7.net/static/29664/sku/atacado-2a-linha-moda-masculina-2a-calcas-e-camisas-masculinas-100-pecas-de-segunda-linha--p-1542372289203.jpg",
        bermudas:"combosInfanti",
        camisas:"https://i.pinimg.com/236x/9c/23/1c/9c231cb67442f0a1f86c06b939781002.jpg",
        camiseta:"https://images.tcdn.com.br/img/img_prod/1014181/camiseta_basica_logo_bordada_preto_pena_1661_1_0f5d9b9c961295b4e7cec174cdd1d23b.jpg",
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>Moda Masculina</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main}>
                    <h1>Moda Masculina</h1>
                    <div>
                        <SectionsCards />
                    </div>
                </main>

            </div>
        </>
    )
}