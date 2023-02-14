import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Context from "../components/contexts/context";

import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";

export default function App({ Component, pageProps }) {
  //  const mode=useContext(UserContext)
  const [mode, setMode] = useState("dark");
  const [login, setLogin] = useState(true);

  let currentMode;
  useEffect(() => {
    currentMode = localStorage.getItem("mode");
    if (currentMode) {
      console.log(mode,currentMode)
      localStorage.setItem("mode", mode);
    } else {
      localStorage.setItem("mode", mode);
    }
  }, [mode]);

  return (
    <>
      <Context.Provider value={{ mode, setMode, login }}>
        <div className={mode === "dark" ? "dark" : "light"}>
          <Header />
            <Component {...pageProps}  />
          <Footer />
        </div>
      </Context.Provider>
    </>
  );
}
