import Head from 'next/head'
import Image from 'next/image'
import Formulario from '../../components/Formulario'
import Header from '../../components/Header'
import styles from './styles.module.css'

export default function Contato() {
    return (
        <>
            <Head>
                <title>Contatos</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Contatos</h1>
                <Formulario />
            </main>
            
        </>
    )
}
