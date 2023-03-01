import React, { useContext, useRef, useState, useEffect } from "react";

import Context from "../contexts/context";
const SelectMenu = ({ selectMenu, getDepositAddress, network }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState('Select Network');
  const [overlay, setOverlay] = useState(false);
  const ref = useRef(null);
  const { mode } = useContext(Context)
  const dropdown = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [])

  return (
    <>
      <div ref={dropdown} className={`relative pr-2  ${open && "md:z-[2]"}`}>
        <div className="flex bg-transparent justify-between items-center">
          <input
            type="text"
            name=""
            id=""
            className="caret-white p-2 pr-0 outline-none bg-transparent w-full  info-16 dark:text-white dark:caret-black"
            defaultValue={value}
            onClick={() => {
              setOpen(!open);
              setOverlay(!overlay);
            }}
          // onBlur={() => {
          //   setOpen(!open);
          //   setOverlay(!overlay);
          // }}
          ></input>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={` ${open && "rotate-90"} duration-300 w-6 h-6`}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={mode === "dark" ? "white" : "currentColor"}

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          className={`  md:absolute  bg-white  w-full ${open
              ? "top-[140%] visible opacity-100 "
              : " invisible opacity-0 top-[100%]"
            } border  duration-300 `}
        >
          <div className="relative  ">
            <div className="hidden md:block p-1 -mt-[5px] z-0 bg-white -rotate-45 absolute left-10 dark:bg-black-v-4"></div>
          </div>
          <div
            className={` bg-black  opacity-0 invisible transition-[opacity] duration-300 fixed top-0 left-0 h-full w-full ${overlay && "!visible opacity-75 z-[3] md:hidden"
              }`}
          ></div>
          <div
            className={`h-[50%] rounded-t-xl md:static md:rounded-none md:w-[unset] fixed -bottom-[100%] left-0 w-full bg-white dark:bg-black dark:text-white transition-[bottom] ${open && "bottom-[0%] z-[4]"
              }`}
          >
            <span className="block md:hidden my-2 p-2 rounded-xl">
              Please Select
            </span>
            {selectMenu &&
              selectMenu.map((e, i) => {
                return (
                  <button
                    key={i}
                    className={`md:relative ${open && "z-[2]"
                      } info-14-16 block w-full text-left p-2 dark:text-white dark:bg-black  ${active === i &&
                      "bg-blue-50 text-primary dark:!text-primary"
                      }`}
                    onClick={() => {
                      getDepositAddress && getDepositAddress(e.type)
                      network ? setValue(e.networkName): setValue(e);
                      setOpen(false)
                      setActive(i);
                    }}
                  >
                    {network ? e.networkName : e}
                  </button>
                );
              })
            }
            <button
              className="fixed bottom-0 p-4 w-full border-t-4 md:hidden"
              onClick={() => {
                setOpen(!open);
                setOverlay(!overlay);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectMenu;
