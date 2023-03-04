import Icons from "../snippets/icons";
import Image from "next/image";
import Context from "../contexts/context";
import { useContext, useRef } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import NavAccordian from "./navAccordian";

const SideMenu2 = ({ subMenu, assetMenu, setShowMenuOpen, showMenuOpen,session }) => {
  const { mode, setLogin, setClick } = useContext(Context);
  const router = useRouter();
  const ref=useRef(null)

  return (
    <>
     
      <div
        className={`fixed overflow-x-auto table_box h-[calc(100vh-58px)] p-5 z-[1] duration-300 ${
          router.pathname === "/" ? "top-0" : "top-0  "
        } bg-white dark:bg-black ${
          showMenuOpen ? "right-[0%]" : "!-right-[100%] "
        }`}
      >
        <ToastContainer />
       <div className="bg-white dark:bg-black absolute left-[5px] top-0 py-4 px-2 w-full ">
       <button
          onClick={() => {
            setShowMenuOpen(!showMenuOpen);
            setClick(false)
          }}
          className=" "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={mode === "dark" ? "white" : "currentcolor"}
            className="w-6 h-6 mr-0 ml-auto "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
       </div>
        <div className="mt-12">
          <h4 className="section-secondary-heading font-noto">BGUSER-{session && session.user.own_code}</h4>
          <span className="flex gap-2 items-center mt-3">
          <span className="info-14-20">UID </span>
          <span className="info-14-20" ref={ref}>5936496768 </span>
         
          <button
                  onClick={() => {
                    navigator.clipboard.writeText(ref.current.innerText);
                    toast.success("Copied to Clipboard", {
                      autoClose: 1000,
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={mode === "dark" ? "white" : "currentColor"}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                </button>
                </span>
        </div>
        {assetMenu && (
          <div className="px-4 pt-4 lg:hidden">
            <NavAccordian
              heading={"Assets"}
              setShow={setShowMenuOpen}
              content={assetMenu}
            />
          </div>
        )}
        {subMenu != undefined &&
          subMenu != "" &&
          subMenu &&
          subMenu.map((e, index) => {
            return (
              // `${e.linkUrl}`
              <Link
                href={{ pathname: `${e.linkUrl}` }}
                key={index}
                onClick={() => {
                  setShowMenuOpen(false);
                  setClick(false)
                }}
                className={`items-center rounded flex gap-6 min-w-[280px] p-4   ${
                  mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
                }`}
              >
                <Icons type={e.svgType} />
                <div className="grow">
                  <h3 className="info-14-16">{e.linkText}</h3>
                  <p className="info-12 mt-1 max-w-[135px] w-full">{e.desc}</p>
                </div>
              </Link>
            );
          })}

      </div>
        <div className={`${showMenuOpen ? "right-[0%]" : "!-right-[100%] "} duration-300 border-t fixed right-0 max-w-[320px] w-full bottom-0 pt-2  z-[9] border-grey  -ml-5 bg-white dark:bg-black-v-2`}>
          <button
            className={`info-14-16 items-center rounded  flex gap-6 w-full p-4   ${
              mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
            }`}
            onClick={() => {
              signOut();
              setLogin(false);
            }}
          >
            <Icons type="log_out" /> Log Out
          </button>
        </div>
    </>
  );
};

export default SideMenu2;
