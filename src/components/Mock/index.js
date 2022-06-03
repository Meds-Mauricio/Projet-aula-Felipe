import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa';

export default function Mock() {
    const vendedor = [
        {
            nome: "Mauricio",
            descricao_1: "Clica no icone do whatsap, e fala com o vendedor",
            descricao_2: "Obrigado por comprar conosco",
            contato: {
                tel: "11 982620594",
                whattsap: <a href="https://web.whatsapp.com/send?phone=5511982620594" target='_blank'><FaWhatsappSquare /></a>
            }
        },
        {
            nome: "Mauricio",
            descricao_1: "Clica no icone do whatsap, e fala com o vendedor",
            descricao_2: "Obrigado por comprar conosco",
            contato: {
                tel: "11 982620594",
                whattsap: <a href="https://web.whatsapp.com/send?phone=5511982620594" target='_blank'><FaWhatsappSquare /></a>
            }
        },
        {
            nome: "Mauricio",
            descricao_1: "Clica no icone do whatsap, e fala com o vendedor",
            descricao_2: "Obrigado por comprar conosco",
            contato: {
                tel: "11 982620594",
                whattsap: <a href="https://web.whatsapp.com/send?phone=5511982620594" target='_blank'><FaWhatsappSquare /></a>
            }
        }
    ]


    return (
        <section>
            <div className='mock'>

            </div>
        </section>
    )
}
