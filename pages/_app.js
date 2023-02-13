import "@/styles/globals.css";
import { useState } from "react";
import Context from "../components/contexts/context"

import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";

export default function App({ Component, pageProps }) {
//  const mode=useContext(UserContext)
const [mode, setMode] = useState("dark");
  return (
    <>
      <Context.Provider value={{mode,setMode}}>

        <div className={mode === "dark" ? "dark" : "light"}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Context.Provider>
   
    </>
  );
}
