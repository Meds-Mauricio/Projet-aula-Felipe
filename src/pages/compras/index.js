import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import react, { useState } from 'react'
import axios from 'axios'

export default function Compras () {

    const [resposta, setResposta] = useState([]);
   
    const click = () => {
        window.location.href = "/cadastro"
        localStorage.clear(resposta)
    }
    return (
        <>
            <button onClick={()=> click()}>voltar</button>
        </>
    )
}