// import { FaWhatsappSquare } from 'react-icons/fa';
import React from "react"
import styles from './styles.module.css'

export default function Modal() {
        
    return (
        <div className='modal'>
            <div className={styles.container}>
                <button className={styles.close} />
                <div className={styles.content}>
                    <loja />
                </div>
            </div>
        </div>
    )
}