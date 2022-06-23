import React from 'react'
import Card from '../Card'
import style from './styles.module.css';

export default function BoxCardFeminino() {

    return (
        <div className={style.imagem}>
            <Card
                imagem='https://a-static.mlcdn.com.br/800x560/tshirt-feminina-camisas-diversas-cores-e-modelos-blusinhas-colecao-nova-moda-feminina-hugo-sm/vecarexclusivasmarcas/c3f6d748f0a111ebafac4201ac18500e/94600e6605c2d684d9ce8de2b4459fc1.jpg'
                title='Camiseta'
                price='R$ 40,00'
                Size='Pequena'
                
            />
            <Card
                imagem='https://cf.shopee.com.br/file/b897b11aa128127acdf651ee822eb3e8'
                title='Camiseta'
                price='R$ 50,00'
                size='Grande'
            />
            <Card
                imagem='https://img.elo7.com.br/product/600x380/3757031/calca-jeans-feminina-premium-skynny-com-lycra-estica-36-46-calca-skynny.jpg'
                title='Calça Jeans'
                price='R$ 50,00'
                size='Pequena'
            />
            <Card
                imagem='https://images-shoptime.b2w.io/produtos/1738075156/imagens/camisa-camiseta-blusa-blusinha-t-shirt-infantil-menina-feminina-criancas-modelos-legais-kids-festa-sorvete-oferta-promo/1738075252_1_large.jpg'
                title='Camiseta Infantil'
                price='R$ 40,00'
                size='Média'
            />
            <Card
                imagem='https://www.roupasparaatacado.com.br/product_images/h/296/Cal%E7a_Moletom_Infantil_Feminina_%281%29__30746_std.jpg'
                title='Calça de Moletom Infantil'
                price='R$ 40,00'
                size='Médio'
            />
            <Card
                imagem='https://thumbs.dreamstime.com/z/cole%C3%A7%C3%A3o-de-v%C3%A1rios-tipos-cal%C3%A7as-jeans-azuis-conjunto-manequins-f%C3%AAmeas-em-pernas-feminino-diferentes-cores-femininos-loja-168778415.jpg'
                title='Calça Jeans'
                price='R$ 120,00'
                size='Grande'
            />

        </div>
    )
}