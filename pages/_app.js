import "@/styles/globals.css";
import { useState, useEffect, useRef } from "react";
import Context from "../components/contexts/context";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import Loader from "@/components/snippets/loader";

import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps }, props }) {
  //  const mode=useContext(UserContext)

  const [mode, setMode] = useState("dark");
  const [verifyData, setVerifyData] = useState(false);
  const [login, setLogin] = useState(false);
  const [click, setClick] = useState(false);
  const [loader, setLoader] = useState(true);
  const [pad, setPad] = useState();
  const [topBar, setTopBar] = useState(true);
  const ref = useRef(null);
  const ref2 = useRef(null);
  let currentMode;
  let padding;

  useEffect(() => {
    padding = ref.current.offsetHeight;
    // console.log(padding)
    setPad(padding);
    ref2.current.setAttribute("style", `padding-top: ${padding}px`);
    currentMode = localStorage.getItem("mode");
    if (currentMode == "light") {
      setMode(currentMode);
    } else {
    }
    setTimeout(() => {
      setLoader(false);
    }, 1500);

    window.addEventListener("resize", () => {
      if (ref.current !== null) {
        padding = ref.current.offsetHeight;
        // console.log(padding + "in resize function")
        setPad(padding);

        ref2.current.setAttribute("style", `padding-top: ${padding}px`);

      }

    });
  }, []);

  const heightUpdate = (topPaddong) => {
    padding = document.querySelector(".header").offsetHeight;
    // console.log(padding+"in height update function")
    ref2.current.setAttribute("style", `padding-top: ${padding}px`);
  };
  return (
    <>
      <div className={mode === "dark" ? "dark" : "light"}>
        {loader && (
          <div className=" fixed bg-black top-0 left-0 w-full h-full z-50 grid place-items-center">
            <Loader />
          </div>
        )}
        <SessionProvider session={session}>
          <Context.Provider
            value={{
              mode,
              setMode,
              login,
              setLogin,
              click,
              setClick,
              heightUpdate,
              padding,
              topBar,
              setTopBar,
              verifyData,
              setVerifyData
            }}
          >
            <div
              className={` bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full ${click && "!visible opacity-50 z-[2]"
                }`}
            ></div>
            <div ref={ref} className="fixed  w-full z-[4] border-b border-primary ">
              <Header />
            </div>


            {/* <div
              className={` bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full ${click && "!visible opacity-50 z-[2]"
                }`}
            ></div>
            
            <div ref={ref} className="fixed  w-full border-b border-primary z-[4] ">
              <Header />
            </div> */}

            <div ref={ref2}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </Context.Provider>
        </SessionProvider>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: { name: "prince" }, // will be passed to the page component as props
  };
}
