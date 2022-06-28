import '../../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Banner from '../components/Banner'

function MyApp({ Component, pageProps }) {
    return (
        <>

            <Header />
            <Banner />
            <Container>
            <Component {...pageProps} />
            </Container>
            <Footer />
        </>
    )
}
export default MyApp