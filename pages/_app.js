import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Context from "../components/contexts/context";

import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";

export default function App({ Component, pageProps,props }) {
  //  const mode=useContext(UserContext)
  console.log("props",props)
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
          <Header props={props} />
            <Component {...pageProps}  />
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
