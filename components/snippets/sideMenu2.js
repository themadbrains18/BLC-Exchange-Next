import Icons from "../snippets/icons";
import Image from "next/image";
import Context from "../contexts/context";
import { useContext } from "react";
import Link from "next/link";

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const SideMenu2 = ({ subMenu, fixed_cta, setShowMenuOpen, svgType, showMenuOpen }) => {
  const { mode, setLogin } = useContext(Context);
const router=useRouter()


  return (
    <>
      <div
        className={`fixed overflow-x-auto table_box h-[100vh] p-5 z-[1] duration-300 ${router.pathname === "/" ? "top-[6%] md:top-[12.9%]": "top-[6%] md:top-[7.5%] "} bg-white dark:bg-black ${
          showMenuOpen  ? "right-[0%]" : "!-right-[100%] "
          }`}
         
      >
        <button
         onClick={() => {
          setShowMenuOpen(!showMenuOpen);
         
        }}
        
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

        {subMenu != undefined &&
          subMenu != "" &&
          subMenu &&
          subMenu.map((e, index) => {
            return (
              // `${e.linkUrl}`
              <Link
                href={{ pathname: `${e.linkUrl}` }}
                key={index}
                className={`items-center rounded flex gap-6 min-w-[330px] p-4   ${
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

        {fixed_cta && (
          <div className="border-t fixed bottom-0 pt-2  z-[1] border-grey w-full rounded-b-xl  -ml-4 bg-white dark:bg-black-v-2">
            <button
              className={`info-14-16 items-center rounded  flex gap-6 w-full p-4   ${
                mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
              }`}
              onClick={() => {
                signOut();
                setLogin(false);
              }}
            >
              {" "}
              <Icons type={svgType} /> {fixed_cta}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SideMenu2;
