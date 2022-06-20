import { FaWhatsappSquare } from 'react-icons/fa';
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

// const modal = ({loja}) => {
//     const loja = () => [

//             vendedor= "Mauricio",
//             descricao_1= "Clica no icone do whatsap, e fale com o vendedor",
//             descricao_2= "Obrigado por comprar conosco",
//             contato= {
//                 tel: "11 982620594",
//                 whattsap: <a href="https://web.whatsapp.com/send?phone=5511982620594" target='_blank'><FaWhatsappSquare /></a>
//             }
//     ]//
// [

        //     {
        //         vendedor: "Mauricio",
        //         descricao_1: "Clica no icone do whatsap, e fala com o vendedor",
        //         descricao_2: "Obrigado por comprar conosco",
        //         contato: {
        //             tel: "11 982620594",
        //             whattsap: <a href="https://web.whatsapp.com/send?phone=5511982620594" target='_blank'><FaWhatsappSquare /></a>
        //         }
        //     },
        //     {
        //         vendedor: "Mauricio",
        //         descricao_1: "Clica no icone do whatsap, e fala com o vendedor",
        //         descricao_2: "Obrigado por comprar conosco",
        //         contato: {
        //             tel: "11 982620594",
        //             whattsap: <a href="https://web.whatsapp.com/send?phone=5511982620594" target='_blank'><FaWhatsappSquare /></a>
        //         }
        //     }
        // ]


        //     return (
        //         <>
        //             <div>




        //             </div>
        //      </>