import React from 'react'
import Home from '../home';
import React, { useState, useEffect } from 'react';

export default function querystring() {


    const params = new URLSearchParams(window.location.search);
    let urlParams = undefined;
    params.forEach((value, key) => {
        urlParams = Object.assign({}, urlParams, {
            [key]: value.toString()
        });
    });

    return (

        <div className={styles.filtro}>
            <select onChange={(e) => setSize(e.target.value)}>
                <option value='selecione'>Selecione</option>
                <option value='Grande'>Grande</option>
                <option value='Média'>Médio</option>
                <option value='Pequeno'>Pequeno</option>
            </select>
            <button onClick={() => window.location.href = `/setorMasculino?size=${size}`}>Filtrar</button>
        </div>
    )
}
