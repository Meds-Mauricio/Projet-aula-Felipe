import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import SectionsCards from '../../components/SectionBanners/Sections/Cards'
import styles from './styles.module.css'
import Card from '../../components/Card'
import Footer from '../../components/Footer'


export default function SetorFeminina() {

    const Feminina = {
        BlusaDeFrio: "https://m.media-amazon.com/images/I/61lBJXWZbTL._AC_SX569_.jpg",
        shorts: "https://images.ssstatic.com/lote-de-roupas-femininas-50-pecas-10932643z0-16541431.jpg",
        calças: "https://29664.cdn.simplo7.net/static/29664/sku/atacado-2a-linha-moda-masculina-2a-calcas-e-camisas-masculinas-100-pecas-de-segunda-linha--p-1542372289203.jpg",
        conjuntinhos: "https://i.pinimg.com/474x/72/74/37/7274371d6226037829f9e522fc64f3ca.jpg",
        camisas: "https://i.pinimg.com/236x/21/b3/02/21b30265b95e47d6e4c064783b9ef755.jpg",
        blusinhas: "https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAGWPzQ6CMBCEXwV7Nq2Ihp9boxI5AEYwnmtpSrUUAktCYnx3y8VonOxhZ7L5NvNEl16jCNUA3RARohqJWz1h3jb41lvLpBhI6NsJ3E24DgPfd7eeh++dREsUM61vjD9+IQMwUPybwyui1QDKSGJaiNvRVLgzMyFlk2rG5iiUrAFFrr!6ZFdVQY2itWcjqkH0hoEoxWTP0Dm!nGjhxIc0yZLMblnu0JLu6D5fOH+yf5K5SQG9AG6Z3usN/F1VfxPkAAAA=/roupas-femininas-no-atacado.jpg",
    }
    return (
        <>
            <Head>
                <title>Moda Feminina</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Moda Feminina</h1>
                <SectionsCards />
                {/* {mock.map(item => 
       <Card imagem={item.img} />
       )} */}
            </main>
            <Footer />
        </>
    )
}