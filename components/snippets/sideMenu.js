import { useContext, useRef } from "react";
import Context from "../contexts/context";
import NavAccordian from "../snippets/navAccordian";
import Link from "next/link";

const SideMenu = ({ show, setShow, data }) => {
  const { mode, setMode } = useContext(Context);
  return (
    <div
      className={`fixed max-w-80 w-full h-full duration-300 top-0 bg-white dark:bg-black ${
        show === false ? "right-0" : "right-[-100%]"
      }`}
    >
      <button className=" ml-auto  block p-5"  onClick={() => {
            setShow(true);
          }}>
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
      <div className="mx-3">
        <button className="transparent-cta w-full">sign up</button>
        <button className="cta w-full ">Login</button>
      </div>

      <div
        className="relative flex justify-between m-3
         align-middle select-none transition duration-200 ease-in"
      >
        <span className="info-14-20 ">Dark Mode</span>
        <div>
          <input
            type="checkbox"
            defaultChecked={mode === "dark" ? "checked" : ""}
            name="toggle"
            id="toggle"
            onClick={() => {
              mode === "light" ? setMode("dark") : setMode("light");
            }}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "
          />

          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden w-10 h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>

      {data &&
        data.map((e, i) => {
          return (
            <div className="mt-2 px-3" key={i}>
              <NavAccordian heading={e.name} content={e.subMenu} />
            </div>
          );
        })}
      <div className="px-3">
        {/* download */}
        <div className="flex gap-3 mb-4">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={mode === "dark" ? "white" : "currentcolor"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
          <h3 className="info-14-20">Download App</h3>
        </div>
        {/* bell   */}

        <div className="flex gap-3 mb-4">
          <Link href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={mode === "dark" ? "white" : "currentcolor"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </Link>
          <h3 className="info-14-20 ">Notification</h3>
        </div>

        {/* global  */}
        <div className="flex gap-3 mb-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={mode === "dark" ? "white" : "currentcolor"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </button>
          <h3 className="info-14-20">English</h3>
        </div>
        {/* currency change */}
        <div className="flex gap-3">
          <Link href={""}>
            <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24}  fill={mode === "dark" ? "white" : "currentcolor"}>
              <path d="M12 23q-2.8 0-5.15-1.275Q4.5 20.45 3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9Q9.65 21 12 21q1.875 0 3.513-.712 1.637-.713 2.85-1.926 1.212-1.212 1.925-2.85Q21 13.875 21 12h2q0 2.275-.862 4.275-.863 2-2.363 3.5t-3.5 2.362Q14.275 23 12 23Zm-.9-4v-1.3q-1.175-.275-1.912-1.012Q8.45 15.95 8.1 14.75l1.65-.65q.3 1.025.938 1.537.637.513 1.462.513t1.412-.388q.588-.387.588-1.212 0-.725-.612-1.175-.613-.45-2.188-1.025-1.475-.525-2.162-1.25-.688-.725-.688-1.9 0-1.025.713-1.863.712-.837 1.937-1.087V5h1.75v1.25q.9.075 1.638.725.737.65 1.012 1.525l-1.6.65q-.2-.575-.65-.962-.45-.388-1.25-.388-.875 0-1.337.375-.463.375-.463 1.025 0 .65.575 1.025.575.375 2.075.875 1.8.65 2.4 1.525.6.875.6 1.925 0 .725-.25 1.275-.25.55-.662.937-.413.388-.963.625-.55.238-1.175.363V19ZM1 12q0-2.275.863-4.275.862-2 2.362-3.5t3.5-2.363Q9.725 1 12 1q2.8 0 5.15 1.275Q19.5 3.55 21 5.675V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9Q14.35 3 12 3q-1.875 0-3.512.712-1.638.713-2.85 1.925-1.213 1.213-1.926 2.85Q3 10.125 3 12Z" />
            </svg>
          </Link>
          <h3 className="info-14-20">usd</h3>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
