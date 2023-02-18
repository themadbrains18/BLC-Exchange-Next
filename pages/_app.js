import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Context from "../components/contexts/context";

import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";

export default function App({ Component, pageProps,props }) {
  //  const mode=useContext(UserContext)

  const [mode, setMode] = useState("light");
  const [login, setLogin] = useState(true);
  const [click, setClick] = useState(false);

  let currentMode;
  useEffect(() => {
    currentMode = localStorage.getItem("mode");
    if (currentMode) {
      localStorage.setItem("mode", mode);
    } else {
      localStorage.setItem("mode", mode);
    }
    
  }, [mode]);

  return (
    <>
        <div className={mode === "dark" ? "dark" : "light"}>
      <Context.Provider value={{ mode, setMode, login,setLogin,click, setClick }}>
          <Header props={props} />
          <div >
<div className={`qwe bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full z-[20] ${click && "!visible opacity-50"}`}></div>
             <Component {...pageProps}  />
          </div>
          <Footer />
      </Context.Provider>
        </div>
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {name: "prince"}, // will be passed to the page component as props
  }
}
