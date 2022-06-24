import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import react, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SetorInfantil() {

    const [resposta, setResposta] = useState([]);
    const [teste, setTeste] = useState([])


    useEffect(() => {
        axios.get('https://projeto-mock-de-roupas-default-rtdb.firebaseio.com/roupas/infantil.json')
            .then(function (response) {
                setResposta(response.data);
            }
            )
    }, [])

    const click = () => {
        window.location.href = "/cadastro"
    }
    return (
        <>
            <Head>
                <title>Moda Infantil</title>
                <meta name="https://api-de-roupas-default-rtdb.firebaseio.com/roupas/.json" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.cabecalho}>
                <main className={styles.main}>
                    <h1>Moda Infantil</h1>
                </main>
                <section className={styles.cardsInfantil}>
                    {resposta && Object.values(resposta).map((item) => {
                        return (
                            <div className={styles.card} onClick={click}>
                                <img src="item.img" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.size}</p>
                                <card />
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