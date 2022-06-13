import React from 'react'
import { useState } from 'react'

export default function QueryString() {
    
    // const [loja, setLoja] = useState('selecione')
    const [roupas, setRoupas] = useState('selecione')
    const [tamanho, setTamanho] = useState('selecione')

    // console.log(loja);

        return (
            <section>
                <select onChange={(e) => setRoupas(e.target.value)}>
                    <option>Selecione</option>
                    <option value="calça">Calça</option>
                    <option value="camiseta">Camiseta</option>
                    <option value="bermuda">Bermuda</option>
                    {/* <option value="saia">Saia</option> */}
                </select>
                <select onChange={(e) => setTamanho(e.target.value)}>
                    <option>Selecione</option>
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                    <option value="plusSize">Plus Size</option>
                </select>
                <button onClick={() => window.location.href = `/setorMasculino?&roupas=${roupas}&tamanho=${tamanho}`}>Filtrar</button>
            </section>
        )
    }
    



