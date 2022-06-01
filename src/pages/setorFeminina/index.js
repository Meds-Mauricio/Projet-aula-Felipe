import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import react, { useState, useEffect } from 'react'
import axios from 'axios'

export default function setorFeminina() {

    const [resposta, setResposta] = useState([]);
    const [teste, setTeste] = useState([])


    useEffect(() => {
        axios.get('https://projeto-mock-de-roupas-default-rtdb.firebaseio.com/roupas/femininas.json')
            .then(function (response) {
                setResposta(response.data);
            }
            )
    }, [])

    return (
        <>

            <Head>
                <title>Moda Feminina</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.cabecalho}>
                <main className={styles.main}>
                    <h1>Moda Feminina</h1>
                </main>
                <section className={styles.cardsFeminina}>
                {resposta && Object.values(resposta).map((item) => {
                    return (
                            <div className={styles.card}>
                                <img src={item.thumbnail} />
                                <p>{item.tipo}</p>
                                <p>{item.valor}</p>
                            </div>
                    )
                }
                )
            }
            </section>

            </section>

        </>
    )



}
