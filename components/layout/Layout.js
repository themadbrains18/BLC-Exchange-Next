import SideBar from "@/components/asset/sideBar";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "../contexts/context";
const Layout = ({ children, slug, data }) => {
  let ref = useRef();
  const {setTopBar} =useContext(Context)
 const [padding,setPadding] =useState()
 useEffect(() => {
    setTopBar(false)
    setPadding(document.querySelector(".header").offsetHeight)
    console.log(padding);
    ref.current.setAttribute("style", `padding-top: ${padding}px`);
  }, [padding]);

  return (
    <>
      <div
        ref={ref}
        className={`flex  flex-col md:flex-row dark:bg-black-v-5 `}
      >
        <SideBar data={data} slug={slug} />
        {children}
      </div>
    </>
  );
};

export default Layout;
