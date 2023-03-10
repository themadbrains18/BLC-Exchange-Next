import SideBar from "/components/asset/sideBar";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "../contexts/context";
const Layout = ({ children, name, data ,verify_cta }) => {
  const { setTopBar } = useContext(Context);
  // let padding;
  // useEffect(() => {
  //   console.log("hop")
    // setTopBar(false);
  //   padding = document.querySelector(".navbar").offsetHeight
  //   let div = document.querySelector(".ref2");
  //   div.removeAttribute("style");
  //   div.setAttribute("style",`padding-top: ${padding}px` );
  // }, []);
  return (
    <>
      <div className={`flex  flex-col md:flex-row dark:bg-black-v-5 `}>
        <SideBar data={data} name={name} verify_cta={verify_cta} />
        <div className="md:w-[calc(100%-225px)] md:ml-auto ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
