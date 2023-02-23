import React, { useState } from "react";
import Image from "next/image";
const SelectMenu = ({ selectMenu }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(selectMenu[0]);
  return (
    <>
      <div
        className="relative border border-primary w-fit "
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="flex bg-white">
          <input type="text" name="" id=""  className="caret-white p-1 outline-none bg-transparent   info-16 text-black" value={value} onChange={()=>{}} ></input>

          <Image
            src="/assets/icons/down.svg"
            className={` ${open && "rotate-90"} duration-300`}
            height={15}
            width={15}
            alt="Down Arrow"
          ></Image>
        </div>
        <div className={`absolute  bg-white  w-full ${open ? "top-[140%] visible opacity-100  " :" invisible opacity-0 top-[100%]"} border  duration-300 `}>
          <div className="relative ">
            <div className=" p-1 -mt-[5px] z-0 bg-white -rotate-45 absolute left-10 dark:bg-black-v-4"></div>
          </div>
          {selectMenu &&
            selectMenu.map((e, i) => {
              return <button key={i} className={`relative z-[1] info-14-16 block w-full text-left p-2 dark:text-white dark:bg-black  ${active===i && "bg-blue-50 text-primary dark:!text-primary"}`} onClick={(()=>{
                setActive(i)
                setValue(e)

              })} >{e}</button>;
            })}
        </div>
      </div>
    </>
  );
};

export default SelectMenu;
