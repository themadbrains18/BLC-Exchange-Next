import '@/styles/globals.css'
import Footer from '@/components/header-footer/footer'
import Header from '@/components/header-footer/header'





export default function App({ Component, pageProps }) {
  return(
    <>
      <Header/>
      <Component {...pageProps} />
    <Footer />
    </>
  )

}


