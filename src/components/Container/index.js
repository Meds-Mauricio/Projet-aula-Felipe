import React from 'react'
import  style from './styles.module.css'

export default function Container({ children }) {
    return (
<div  className={style.container}>
    {children}
</div>
    )
}