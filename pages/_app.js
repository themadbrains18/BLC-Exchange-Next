import "@/styles/globals.css";
import { useState, useEffect, useRef } from "react";
import Context from "../components/contexts/context";
import Footer from "@/components/header-footer/footer";
import Header from "@/components/header-footer/header";
import Loader from "@/components/snippets/loader";

// import { signOut, useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps : { session, ...pageProps }, props }) {
  //  const mode=useContext(UserContext)
  console.log(session,' sessionsession')

  const [mode, setMode] = useState("dark");
  const [login, setLogin] = useState(true);
  const [click, setClick] = useState(false);
  const [loader, setLoader] = useState(true);
  const [pad, setPad] = useState();
  // const [topBar, setTopBar] = useState(true);
  const ref = useRef(null);
  const ref2 = useRef(null);
  let currentMode;
  let padding;

  useEffect(() => {
    padding = ref.current.offsetHeight;
    // console.log(padding)
    console.log(padding,'===inital padding')
    setPad(padding);
    ref2.current.setAttribute("style", `padding-top: ${padding}px`);
    currentMode = localStorage.getItem("mode");
    if (currentMode == "light") {
      setMode(currentMode);
    } else {
    }
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const heightUpdate = (topPaddong) => {
    console.log(pad,'all padding');
    console.log((pad - topPaddong),'after notification remove padding');
    //  padding = document.querySelector(".navbar").offsetHeight;
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
            ref2,
            ref
            
          }}
        >
          <div
            className={` bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full ${
              click && "!visible opacity-50"
            }`}
          ></div>
          <div ref={ref} className="fixed  w-full border-b border-primary ">
            <Header />
          </div>

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
