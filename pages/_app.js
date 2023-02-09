import '@/styles/globals.css'
import Footer from '@/components/header-footer/footer'
import Header from '@/components/header-footer/header'
import { useState } from 'react'





export default function App({ Component, pageProps }) {
  const [mode, setMode]=useState("dark")
  console.log(pageProps)
  return(
    <>
    <div className={mode==="dark" ? "dark":"light"} >
    <Header mode={mode} setMode={setMode}/>
      <Component {...pageProps} />
    <Footer />
    </div>
    </>
  )

}


