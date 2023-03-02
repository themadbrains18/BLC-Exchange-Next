import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import Context from "../contexts/context";
import Dropdown from "../snippets/dropdown";
import Icons from "../snippets/icons";
import NavAccordian from "../snippets/navAccordian";

const SideBar = ({ data, name }) => {
  const router = useRouter();

  const { click, setClick, mode } = useContext(Context);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const [pageActive, setPageActive] = useState();
  const handleClick = (i, e) => {
    setActive(i);
    if (!e.menu) {
      setClick(false);
      setShow(false);
    }
  };
  useEffect(() => {
    setPageActive(router.pathname);
  }, []);
  return (
    <>
      <div
        className={`md:sticky top-[80px] md:h-[100vh] ${
          show && "z-[5]"
        } bg-white dark:bg-black-v-5 overflow-x-auto table_box  w-fit px-3 md:px-0  `}
      >
        {name && (
          <button
            className="flex items-center md:hidden capitalize mt-[15px] ml-[4px]"
            onClick={() => {
              setShow(true);
              setClick(true);
            }}
          >
            <h3 className="section-secondary-heading font-noto ">{name}</h3>

            <svg className="mt-[3px]" width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={mode === "dark" ? "white" : "currentcolor"} d="M11.2341 16.5873L14.6179 12.9779C15.1274 12.4344 15.1274 11.5564 14.6179 11.0129L11.2341 7.40354C10.411 6.53952 9 7.1527 9 8.39299V15.5979C9 16.8521 10.411 17.4653 11.2341 16.5873Z" />
            </svg>
            {/* <Image
              src={"/assets/icons/rightArrowSmall.svg"}
              width={24}
              height={24}
              alt=""
            ></Image> */}
          </button>
        )}

        <div
          className={` absolute top-0  duration-300 md:static w-[calc(100%-4rem)] overflow-x-auto table_box bg-white dark:bg-black-v-5 md:w-fit h-[100vh] md:h-auto ${
            show ? "left-0" : "-left-[100%]"
          } `}
        >
          <div className="text-end p-4 border-b md:hidden border-border-clr">
            <button
              className="ml-auto mr-0"
              onClick={() => {
                setShow(false);
                setClick(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={mode === "dark" ? "white" : "currentcolor"}
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

          <div className="menu_box md:border-r h-[100vh]  md:border-primary dark:bg-black-v-4">
            {data &&
              data !== undefined &&
              data.subMenu &&
              data.subMenu.map((e, i) => {
                return (
                  <div key={i}
                    className={`${
                      !e.menu &&
                      pageActive === e.linkUrl &&
                      "md:border-b-2 md:border-t-2 md:border-primary md:bg-active-clr dark:md:bg-black-v-5 "
                    } ${
                      e.menu ? "flex items-center" : " border-transparent"
                    }  `}
                  >
                    {
                      !e.menu && <Link
                      
                      href={`${e.linkUrl}`}
                      className={`md:max-w-[250px] w-full `}
                      target={e.blank && "_blank"}
                      onClick={() => {
                        handleClick(i, e);
                      }}
                    >
                      <div
                        className={`flex gap-3 p-5`}
                      >
                        {!e.menu && (
                          <div className="">
                            <Icons type={e.svgType} />
                          </div>
                        )}
                        {!e.menu && (
                          <span className={` w-full info-14  text-black  hover:!text-black dark:text-white dark:hover:!text-white ${
                            !e.menu &&
                            pageActive === e.linkUrl &&
                            "md:!text-primary md:hover:!text-primary"
                          }`}>
                            {e.linkText}
                          </span>
                        )}
                      </div>
                    </Link>
                    }
                    {e.menu && (
                      <div className="flex py-2 px-4   gap-3 h-full w-full">
                       <div className="flex items-center h-auto max-h-12">

                          <Icons type={e.svgType} />
                       </div>
                      
                        <div className="grow">
                          <NavAccordian
                            heading={e.linkText}
                            className={
                              "info-14 dark:!text-white text-black hover:!text-black dark:hover:!text-white"
                            }
                            content={e.menu}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
