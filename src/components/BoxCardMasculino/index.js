import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from './styles.module.css';
import Card from '../Card';

export default function BoxCardMasculino() {


    const [resposta, setResposta] = useState();
    useEffect(() => {
        axios.get('https://api-de-roupas-default-rtdb.firebaseio.com/roupas/masculina.json')

            .then(function (response) {
                setResposta(response?.data);
            })
    }, []);

    return (
        <div className={style.cards}>
            {resposta && Object.values(resposta.camisetas).map((items) => (
                <Card
                    imagem={items.img}
                    title={items.name}
                    price={items.price}
                    size={items.size}
                    link='https://web.whatsapp.com/send?phone=+5511994893658'
                />
            ))}

        </div>
    )
}
