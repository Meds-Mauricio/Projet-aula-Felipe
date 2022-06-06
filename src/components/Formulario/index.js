import style from './styles.module.css'
import Modal from '../../components/Modal'
import styles from './styles.module.css'
import React, { useState } from 'react'
import Footer from '../Footer'

export default function Formulario() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <section className={style.cabecalho}>
            <form className={style.formCadastro}>
                <p>Login</p>
                <div className={style.formNome}>
                    <label className={style.label} for="nomesobrenome">Nome:</label>
                    <input type="text" className={style.input} required />
                </div>

                <div class={style.formTel}>
                    <label className={style.label} for="telefone">Telefone:</label>
                    <input type="text" id={style.inputTel} required />
                </div>

                <div class={style.formEmail}>
                    <label className={style.label} for="email">Email:</label>
                    <input type="text" className={style.input} required />
                </div>
                <button class={style.submit} href= "contatos" imput type="submit" value='enviar'>Finalizar</button>
            </form>

            <button onClick={() => setIsModalVisible(true)}>contatos</button>


            {isModalVisible && <Modal><p>contatos</p></Modal>}
        </section>

    )
}
