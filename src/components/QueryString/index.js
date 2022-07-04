// import React from 'react'

// export default function queryString() {


//     const [resposta, setResposta] = useState();
//     const [selecionado, setSelecionado] = useState([]);
//     const [size, setSize] = useState('selecione');

//     useEffect(() => {
//         axios.get('https://api-de-roupas-default-rtdb.firebaseio.com/roupas/masculina.json')
//             .then(function (response) {
//                 setResposta(response?.data);
//             })
//     }, []);
//     const params = new URLSearchParams(window.location.search);
//     let urlParams = undefined;
//     params.forEach((value, key) => {
//         urlParams = Object.assign({}, urlParams, {
//             [key]: value.toString()
//         });
//     });

//     return (

//         <div className={styles.filtro}>
//             <select onChange={(e) => setSize(e.target.value)}>
//                 <option value='selecione'>Selecione</option>
//                 <option value='Grande'>Grande</option>
//                 <option value='Média'>Médio</option>
//                 <option value='Pequeno'>Pequeno</option>
//             </select>
//             <button onClick={() => window.location.href = `/setorMasculino?size=${size}`}>Filtrar</button>
//         </div>
//     )
// }
