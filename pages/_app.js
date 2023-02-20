import "@/styles/globals.css";
import { useState, useEffect, useRef } from "react";
import Context from "../components/contexts/context";

import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import Loader from "@/components/snippets/loader";

export default function App({ Component, pageProps, props }) {
  //  const mode=useContext(UserContext)

  const [mode, setMode] = useState("dark");
  const [login, setLogin] = useState(true);
  const [click, setClick] = useState(false);
  const [loader, setLoader] = useState(true);
  const [padding, setpadding] = useState();
  const [topBar, setTopBar] = useState(true);
  const ref = useRef(null);
  const ref2 = useRef(null);
  let currentMode;
  useEffect(() => {
   
    setpadding(ref.current.offsetHeight)
    console.log(ref.current.offsetHeight)
    ref2.current.setAttribute("style", `padding-top: ${padding}px`);
    currentMode = localStorage.getItem("mode");
    if (currentMode == "light") {
      setMode(currentMode);
    } else {
    }
    setTimeout(() => {
     setLoader(false)
    }, 1000);

  }, []);
  
const heightUpdate =(()=>{
  // var padding = ref.current.offsetHeight;
  ref2.current.setAttribute("style", `padding-top: ${padding}px`);
})
  return (
    <>
      <div className={mode === "dark" ? "dark" : "light"}>
        {
          loader && 
        <div  className=" fixed bg-black top-0 left-0 w-full h-full z-50 grid place-items-center">
        <Loader/>
        </div>
        }

        <Context.Provider
          value={{ mode, setMode, login, setLogin, click, setClick ,heightUpdate,padding,topBar,setTopBar }}
        >
          <div
            ref={ref}
            className="fixed w-full z-10 border-b border-primary "
          >
            <Header />
          </div>

          <div ref={ref2}>
            <div
              className={` bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full z-[20] ${
                click && "!visible opacity-50"
              }`}
            ></div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </Context.Provider>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: { name: "prince" }, // will be passed to the page component as props
  };
}
