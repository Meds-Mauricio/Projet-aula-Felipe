import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Card from '../components/Card'
import react, { useState } from 'react'
import BoxCardMasculino from '../components/BoxCardMasculino'
import BoxCardFeminino from '../components/BoxCardFeminino'



export default function Home() {
    const [resposta, setResposta] = useState();
    const [escolhido, setEscolhido] = useState([]);
    const [separado, setSeparado] = useState([]);


    const click = (produto) => {
        setResposta([...escolhido, produto])
        localStorage.setItem('escolhido', JSON.stringify(escolhido))
        window.location.href = "setorMasculino"
        console.log(escolhido)
    }
    const click1 = (produto) => {
        setResposta([...separado, produto])
        localStorage.setItem('separado', JSON.stringify(separado))
        window.location.href = "setorFeminino"
    }
    return (
        <>
            <Head>
                <title>Na Moda</title>
            </Head>
            <Banner />
            <section className={styles.cards}>
                <h1>Roupas Masculinas</h1>
                <div className={styles.cards_1}>
                    <BoxCardMasculino />
                </div>

                <h1> Roupas Femininas</h1>
                <div className={styles.cards_2}>
                    {/* onClick={() => click1(item)}
                     onChange={(e) => setEscolhido(e.target.value)}> */}
                    <BoxCardFeminino />
                </div>
            </section>
        </>
    )

}