import React from 'react'
import style from './styles.module.css'
import sectionCards from "../Card";

export default function Card(props) {
    return (
        <>
            <main className={style.container}>
                <section className={style.grid}>
                    {/* <Card */}
                    <p>thumbnail:{props.thumbnail}</p>
                    <p>titulo:{props.titulo}</p>
                    <p>valor:{props.valor}</p>
                    {/* <Card
                        thumbnail="https://i.pinimg.com/236x/9c/23/1c/9c231cb67442f0a1f86c06b939781002.jpg"
                        titulo="Roupa Social"
                        valor="R$ 180,00"
                    />
                    <Card
                        thumbnail="https://images-americanas.b2w.io/produtos/3102307601/imagens/mais-grossa-de-veludo-com-capuz-imprimir-suit-longo-juventude-luva-sports-men-sweater-f/3102307652_1_xlarge.jpg"
                        titulo="bermudas"
                        valor="R$ 50,00"
                    />
                    <Card
                        thumbnail="https://cf.shopee.com.br/file/2b36a76a146ed36b1369185b56138eb0"
                        titulo="calças"
                        valor="R$ 110,00"
                    />
                    <Card
                        thumbnail="https://img.lojasrenner.com.br/item/600580416/large/1.jpg"
                        titulo="blusas"
                        valor="R$ 80,00"
                    />
                    <Card
                        thumbnail="https://www.barony.com.br/10403-large_default/camisas-masculinas-manga-comprida-com-estampas-de-retalhos-e-listras.jpg"
                        titulo="camisas"
                        valor="R$ 80,00"
                    /> */}
                </section>

                {/* <section className='card2'>
                    <Card
                        thumbnail="https://i.ytimg.com/vi/0ZV9MDwHjVE/maxresdefault.jpg"
                        titulo="blusinhas"
                        valor="R$ 40.00"
                    />
                    <Card
                        thumbnail="https://images.ssstatic.com/lote-de-roupas-femininas-50-pecas-10932643z0-16541431.jpg"
                        titulo="shorts Jeans"
                        valor="R$ 50.00"
                    />
                    <Card
                        thumbnail="https://m.media-amazon.com/images/I/61lBJXWZbTL._AC_SX569_.jpg"
                        titulo="Blusão"
                        valor="R$ 160.00"
                    />
                    <Card
                        thumbnail="https://i.pinimg.com/474x/72/74/37/7274371d6226037829f9e522fc64f3ca.jpg"
                        titulo="conjuntinhos"
                        valor="120.00"
                    />
                    <Card
                        thumbnail="https://a-static.mlcdn.com.br/618x463/conjunto-feminino-de-calca-e-agasalho-manga-longa-com-ziper-tamanho-g-na-cor-preto-com-branco-e-rose-machete-moda-feminina/machetemodafeminina/a9db7ef27ed411ebbb5a4201ac1850d7/369c0469bfc3624f4c28b7ac0b2a389f.jpeg"
                        titulo="conjunto molenton"
                        valor="R$ 140.00"
                    />
                    <Card
                        thumbnail="https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAGWPzQ6CMBCEXwV7Nq2Ihp9boxI5AEYwnmtpSrUUAktCYnx3y8VonOxhZ7L5NvNEl16jCNUA3RARohqJWz1h3jb41lvLpBhI6NsJ3E24DgPfd7eeh++dREsUM61vjD9+IQMwUPybwyui1QDKSGJaiNvRVLgzMyFlk2rG5iiUrAFFrr!6ZFdVQY2itWcjqkH0hoEoxWTP0Dm!nGjhxIc0yZLMblnu0JLu6D5fOH+yf5K5SQG9AG6Z3usN/F1VfxPkAAAA=/roupas-femininas-no-atacado.jpg"
                        titulo="Blusinhas"
                        valor="R$ 60.00"
                    />
                </section>

                <section className='card3'>
                    <Card
                        thumbnail="https://trackfield.vtexassets.com/arquivos/ids/227978/V21040698_0001_0001.jpg?v=637407105285630000"
                        titulo=""
                        valor=""
                    />
                    <Card
                        thumbnail="https://a-static.mlcdn.com.br/1500x1500/camiseta-infantil-masculina-estampa-carro-wrk-kely-kety/grippon/1099284-1099286/fa62b564baddf085d31a9e0cd77dca8d.jpg"
                        titulo=""
                        valor=""
                    />
                    <Card
                        thumbnail="https://static.netshoes.com.br/produtos/calca-infantil-jogger-comfy-masculino/10/EYU-0124-010/EYU-0124-010_zoom1.jpg?ts=1647880738"
                        titulo=""
                        valor=""
                    />
                    <Card
                        thumbnail="https://cf.shopee.com.br/file/297a02b18759c1c30a92036393a04796"
                        titulo=""
                        valor=""
                    />
                    <Card
                        thumbnail="https://static.netshoes.com.br/produtos/calca-infantil-jogger-comfy-masculino/10/EYU-0124-010/EYU-0124-010_zoom1.jpg?ts=1647880738"
                        titulo=""
                        valor=""
                    />
                    <Card
                        thumbnail="https://blog.brandili.com.br/wp-content/uploads/2022/03/modainfantilmeninos5.jpg"
                        titulo=""
                        valor=""
                    />

                </section> */}
            </main>
        </>
    )
}
// export default function Card( thumbnail, titulo, valor, ) {
//     return (
//         <div>
//             <main className="container">
//                 <section className={style.grid}>
//                     <Card
//                         thumbnail="https://29664.cdn.simplo7.net/static/29664/sku/atacado-2a-linha-moda-masculina-2a-calcas-e-camisas-masculinas-100-pecas-de-segunda-linha--p-1542372289203.jpg"
//                         title="bermudas"
//                         price="R$ 40,00"
//                     />
//                     <Card
//                         thumbnail="https://i.pinimg.com/236x/9c/23/1c/9c231cb67442f0a1f86c06b939781002.jpg"
//                         title="Roupa Social"
//                         price="R$ 180,00"
//                     />
//                     <Card
//                         thumbnail="https://images-americanas.b2w.io/produtos/3102307601/imagens/mais-grossa-de-veludo-com-capuz-imprimir-suit-longo-juventude-luva-sports-men-sweater-f/3102307652_1_xlarge.jpg"
//                         title="bermudas"
//                         price="R$ 50,00"
//                     />
//                     <Card
//                         thumbnail="https://cf.shopee.com.br/file/2b36a76a146ed36b1369185b56138eb0"
//                         title="calças"
//                         price="R$ 110,00"
//                     />
//                     <Card
//                         thumbnail="https://img.lojasrenner.com.br/item/600580416/large/1.jpg"
//                         title="blusas"
//                         price="R$ 80,00"
//                     />
//                     <Card
//                         thumbnail="https://www.barony.com.br/10403-large_default/camisas-masculinas-manga-comprida-com-estampas-de-retalhos-e-listras.jpg"
//                         title="camisas"
//                         price="R$ 80,00"
//                     />
//                 </section>

//                 <section className='card2'>
//                     <Card
//                         thumbnail="https://i.ytimg.com/vi/0ZV9MDwHjVE/maxresdefault.jpg"
//                         title="blusinhas"
//                         price="R$ 40.00"
//                     />
//                     <Card
//                         thumbnail="https://images.ssstatic.com/lote-de-roupas-femininas-50-pecas-10932643z0-16541431.jpg"
//                         title="shorts Jeans"
//                         price="R$ 50.00"
//                     />
//                     <Card
//                         thumbnail="https://m.media-amazon.com/images/I/61lBJXWZbTL._AC_SX569_.jpg"
//                         title="Blusão"
//                         price="R$ 160.00"
//                     />
//                     <Card
//                         thumbnail="https://i.pinimg.com/474x/72/74/37/7274371d6226037829f9e522fc64f3ca.jpg"
//                         title="conjuntinhos"
//                         price="120.00"
//                     />
//                     <Card
//                         thumbnail="https://a-static.mlcdn.com.br/618x463/conjunto-feminino-de-calca-e-agasalho-manga-longa-com-ziper-tamanho-g-na-cor-preto-com-branco-e-rose-machete-moda-feminina/machetemodafeminina/a9db7ef27ed411ebbb5a4201ac1850d7/369c0469bfc3624f4c28b7ac0b2a389f.jpeg"
//                         title="conjunto molenton"
//                         price="R$ 140.00"
//                     />
//                     <Card
//                         thumbnail="https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAGWPzQ6CMBCEXwV7Nq2Ihp9boxI5AEYwnmtpSrUUAktCYnx3y8VonOxhZ7L5NvNEl16jCNUA3RARohqJWz1h3jb41lvLpBhI6NsJ3E24DgPfd7eeh++dREsUM61vjD9+IQMwUPybwyui1QDKSGJaiNvRVLgzMyFlk2rG5iiUrAFFrr!6ZFdVQY2itWcjqkH0hoEoxWTP0Dm!nGjhxIc0yZLMblnu0JLu6D5fOH+yf5K5SQG9AG6Z3usN/F1VfxPkAAAA=/roupas-femininas-no-atacado.jpg"
//                         title="Blusinhas"
//                         price="R$ 60.00"
//                     />
//                 </section>

//                 <section className='card3'>
//                     <Card
//                         thumbnail="https://trackfield.vtexassets.com/arquivos/ids/227978/V21040698_0001_0001.jpg?v=637407105285630000"
//                         title=""
//                         price=""
//                     />
//                     <Card
//                         thumbnail="https://a-static.mlcdn.com.br/1500x1500/camiseta-infantil-masculina-estampa-carro-wrk-kely-kety/grippon/1099284-1099286/fa62b564baddf085d31a9e0cd77dca8d.jpg"
//                         title=""
//                         price=""
//                     />
//                     <Card
//                         thumbnail="https://static.netshoes.com.br/produtos/calca-infantil-jogger-comfy-masculino/10/EYU-0124-010/EYU-0124-010_zoom1.jpg?ts=1647880738"
//                         title=""
//                         price=""
//                     />
//                     <Card
//                         thumbnail="https://cf.shopee.com.br/file/297a02b18759c1c30a92036393a04796"
//                         title=""
//                         price=""
//                     />
//                     <Card
//                         thumbnail="https://static.netshoes.com.br/produtos/calca-infantil-jogger-comfy-masculino/10/EYU-0124-010/EYU-0124-010_zoom1.jpg?ts=1647880738"
//                         title=""
//                         price=""
//                     />
//                     <Card
//                         thumbnail="https://blog.brandili.com.br/wp-content/uploads/2022/03/modainfantilmeninos5.jpg"
//                         title=""
//                         price=""
//                     />

//                 </section>


//             </main >
//         </div >
//     )
// }