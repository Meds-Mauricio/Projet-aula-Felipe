import React from 'react';
import style from './styles.module.css';
import { BsWhatsapp } from 'react-icons/Bs/';
import { AiOutlineFacebook } from 'react-icons/ai';

export default function Footer() {
    
    return (
        <section>
            <div className={style.rodape} >
                <h1>Redes Socias</h1>

                <BsWhatsapp color='green' />
                <AiOutlineFacebook color='brue' />
            </div>
        </section>
    )
}
