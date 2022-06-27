import React from 'react';
import style from './styles.module.css';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <section className={style.container}>
            <div className={style.rodape} >
                <div>
                    <h1>Contatos</h1>
                    <p>loja: (+55) 11 98262-0594</p>
                    <p>Reclamação: (+55) 11 93023-4589</p>
                </div>
                <div className={style.horario}>
                    <h1>Horário de Atendimento</h1>
                    <p>Segunda à Sábado das 8h às 20h</p>
                    <p>Exceto Feriados</p>
                </div>
                <div className={style.links}>
                <h2>Redes Socias</h2>
                    <a className={style.whatsapp} href="https://web.whatsapp.com/send?phone=5511982620594" target="_blank"><FaWhatsappSquare /></a>
                    <a className={style.face} href="https://www.facebook.com/mauricio.edson.1" target="_blank"><FaFacebookSquare /></a>
                </div>
            </div>
        </section>
    )
}
