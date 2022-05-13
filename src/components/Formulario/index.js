import style from './styles.module.css'

import React from 'react'

export default function Formulario() {
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
                <button class={style.submit} href="#" imput type="submit" value='enviar'>Enviar</button>
            </form>
        </section>)
}
