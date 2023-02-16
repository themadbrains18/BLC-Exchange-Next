import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Context from "../components/contexts/context";

import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";

export default function App({ Component, pageProps }) {
  //  const mode=useContext(UserContext)
  const [mode, setMode] = useState("dark");
  const [login, setLogin] = useState(false);

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
      <Context.Provider value={{ mode, setMode, login }}>
          <Header />
            <Component {...pageProps}  />
          <Footer />
      </Context.Provider>
        </div>
    </>
  );
}
