import React from 'react'
import Card from '../Card'
import style from './styles.module.css';

export default function BoxCardMasculino() {

    return (
        <div className={style.imagem}>
            <Card
                imagem='https://vrstoreoficial.com.br//imagem/54-CAMISETA-MASCULINA-RUN-CORRIDA-EM-POLIAMIDA-codigo-CM0001-01.jpg'
                title='Camiseta'
                price='R$ 40,00'
            />
            <Card
                imagem='https://www.fabricantesdamoda.com.br/product_images/j/552/bermuda-moletom-masculina-a__58050_std.png'
                title='Bermuda de Moletom'
                price='R$ 40,00'
            />
            <Card
                imagem='https://d1p7l6m042ynk7.cloudfront.net/Custom/Content/Products/59/34/59347_calca-jeans-masculina-59450_m1_637709515098450722.jpg'
                title='Calça Jeans'
                price='R$ 120,00'
            />
            <Card
                imagem='https://modamasculina.inf.br/wp-content/uploads/2020/07/6b9dcecaeb1d5b20ebfa1dc07660fc7f.jpg'
                title='Camisa Social'
                price='R$ 75,00'
            />
            <Card
                imagem='https://cdn.awsli.com.br/600x450/1656/1656307/produto/146765274/b6577e51ca.jpg'
                title='Calça de Moletom'
                price='R$ 60,00'
            />
            <Card
                imagem='https://46635.cdn.simplo7.net/static/46635/sku/masculino-bermuda-sport-verde-oliva--p-1582229658546.jpg'
                title='Bermuda Sport'
                price='R$ 60,00'
            />

        </div>
    )
}
