import Image from "next/image";
import Link from "next/link";
import { useRouter} from "next/router";
import { useState,useContext } from "react";
import Context from "../contexts/context";
import Dropdown from "../snippets/dropdown";
import Icons from "../snippets/icons";
import NavAccordian from "../snippets/navAccordian";

const SideBar = ({ data,slug }) => {
  const router = useRouter();
  const {click,setClick} = useContext(Context)
  const [show, setShow] = useState(false);
  console.log(router)
  return (
    <>
      <div className={`px-3 md:px-0 ${click && "z-30"}  `} >
        <button
          className="flex items-center md:hidden"
          onClick={() => {
            setShow(true);
            setClick(true)
          }}
        >
          <h3 className="section-secondary-heading font-noto ">{data.name}</h3>
          <Image
            src={"/assets/icons/rightArrowSmall.svg"}
            width={24}
            height={24}
            alt=""
          ></Image>
        </button>

        <div
          className={` absolute top-0 z-10 duration-300 md:static w-[calc(100%-4rem)] bg-white dark:bg-black-v-5 md:w-fit h-[100vh] md:h-auto ${
            show ? "left-0" : "-left-[100%]"
          } `}
        >
          <div className="text-end p-4 border-b md:hidden border-border-clr">
            <button
              className="ml-auto mr-0" 
              onClick={() => {
                setShow(false);
                setClick(false)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentcolor"
                className="w-6 h-6 mr-0 ml-auto "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="menu_box p-4">
            {data.subMenu &&
              data.subMenu.map((e, i) => {
          

                return (
                  <li key={i} className={`${e.menu ? "flex items-center":"md:hover:border-r-2 md:border-primary  "} `}>
                    <div className="flex p-3 gap-3 self-start">
                      <Icons type={e.svgType} />
                      {!e.menu && <Link href={`/${slug}/${e.linkUrl}`} className="info-14">{e.linkText}</Link>}
                    </div>
                    {e.menu && (
                      <div className="w-full ">
                        <NavAccordian heading={e.linkText} className={"info-14"} content={e.menu} />
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;