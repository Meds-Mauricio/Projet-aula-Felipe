import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import react, { useState, useEffect } from 'react'
import axios from 'axios'

export default function setorFeminina() {
    const [resposta, setResposta] = useState();
    const [selecionado, setSelecionado] = useState([]);
    // const [pequeno, setPequeno] = useState();
    // const [medio, setMedio] = useState();
    // const [grande, setGrande] = useState();

    useEffect(() => {
        axios.get('https://api-de-roupas-default-rtdb.firebaseio.com/roupas/femininas.json')
            .then(function (response) {
                // console.log(response?.data)
                setResposta(response?.data);
            }
            )
    }, []);
    const click = (produto) => {
        setSelecionado([...selecionado, produto])
        localStorage.setItem('selecionado', JSON.stringify(selecionado))
        window.location.href = "/compras"
    }

//    const compras =(roupas) => {
//    return (

// }
   

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

                <div className={styles.roupas}>
                    <h2>Camisetas</h2>
                    <div className='checkbox'>
                        <input type={"checkbox"} /><label>grande</label>
                        <input type={"checkbox"} /><label>médio</label>
                        <input type={"checkbox"} /><label>pequeno</label>
                    </div>
                </div>
                <section className={styles.cardsFeminina}>
                    {resposta && Object?.values(resposta?.camisetas).map((item) => {
                        return (
                            <div className={styles.card}
                                onClick={() => click(item)}
                                onChange={(e) => setSelecionado(e.target.value)}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.size}</p>
                            </div>
                        )
                    })}
                </section>

                <div className={styles.roupas}>
                    <h3>Calças</h3>
                </div>
                <section className={styles.cardsFeminina}>
                    {resposta && Object?.values(resposta?.calcas).map((item) => {
                        return (
                            <div className={styles.card}
                                onClick={() => click(item)}
                                onChange={(e) => setSelecionado(e.target.value)}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.size}</p>
                            </div>
                        )
                    })}
                </section>

                <div className={styles.roupas}>
                    <h4>Bermudas</h4>
                </div>
                <section className={styles.cardsFeminina}>
                    {resposta && Object?.values(resposta?.bermudas).map((item) => {
                        return (
                            <div className={styles.card}
                                onClick={() => click(item)}
                                onChange={(e) => setSelecionado(e.target.value)}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.size}</p>
                            </div>
                        )
                    })}
                </section>
            </section>
        </>
    )
}

