import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import Context from "../contexts/context";
const SelectMenu = ({ selectMenu }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(selectMenu[0]);
  const [overlay, setOverlay] = useState(false);
  const ref=useRef(null)
  
// document.addEventListener("click",(()=>{
//   if(!ref.current){

//   }
// }))
  return (
    <>
      <div ref={ref}
        className={`relative border border-primary ${open && "md:z-[2]"}`}
        onClick={() => {
          setOpen(!open);
          setOverlay(!overlay)
          
        }}
      >
        <div className="flex bg-white justify-between">
          <input
            type="text"
            name=""
            id=""
            className="caret-white p-1 outline-none bg-transparent   info-16 text-black"
            value={value}
            onChange={() => {}}
          ></input>

          <Image
            src="/assets/icons/down.svg"
            className={` ${open && "rotate-90"} duration-300`}
            height={15}
            width={15}
            alt="Down Arrow"
          ></Image>
        </div>
        <div
          className={`  md:absolute  bg-white  w-full ${
            open
              ? "top-[140%] visible opacity-100 "
              : " invisible opacity-0 top-[100%]"
          } border  duration-300 `}
        >
          <div className="relative  ">
            <div className="hidden md:block p-1 -mt-[5px] z-0 bg-white -rotate-45 absolute left-10 dark:bg-black-v-4"></div>
          </div>
          <div
            className={` bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full ${
              overlay && "!visible opacity-75 z-[3] md:hidden"
            }`}
          ></div>
          <div
            className={`h-[50%] rounded-t-xl md:static md:rounded-none md:w-[unset] fixed -bottom-[100%] left-0 w-full bg-white transition-[bottom] ${
              open && "bottom-[0%] z-[4]"
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
                    className={`md:relative ${
                      open && "z-[2]"
                    } info-14-16 block w-full text-left p-2 dark:text-white dark:bg-black  ${
                      active === i &&
                      "bg-blue-50 text-primary dark:!text-primary"
                    }`}
                    onClick={() => {
                      setActive(i);
                      setValue(e);
                    }}
                  >
                    {e}
                  </button>
                );
              })}
            <button
              className="fixed bottom-0 p-4 w-full border-t-4"
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
