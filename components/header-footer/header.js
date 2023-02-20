import { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Context from "../contexts/context";
import Dropdown from "../snippets/dropdown";
import SideMenu from "../snippets/sideMenu";
import NotificationHover from "../snippets/notificationHover";
import TopBar from "../snippets/topBar";

const Header = (props) => {
  const { mode, setMode, login } = useContext(Context);
  const [show, setShow] = useState(true);
  const [Data, setData] = useState([]);
  const [specialData, setSpecialData] = useState([]);
  useEffect(() => {
    (async () => {
      await fetch("/api/hello")
        .then((res) => res.json())
        .then((data) => {
          setData(data.nav);

          setSpecialData(data.specialNav);
        })
        .catch((error) => console.error(error));
    })().catch((err) => {
      console.log(err);
    });
 

  }, []);

  
  return (
    <>
      <header className="fixed  w-full border-b border-primary z-10">
        {/* top bar */}
        <TopBar/>
        {/* main Navbar */}
        <nav className=" flex bg-white justify-between px-4 dark:bg-black-v-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <img
                src="/assets/images/BLC-Exchange.png"
                className="w-8 md:w-16 py-2 "
                alt="Company Logo"
              />
            </Link>
            <div
              href={""}
              className=" relative hover:pb-8 hover:-mb-8 group "
            >
              {/* grid icon  */}
              <Link href={""} className=" hidden lg:flex lg:items-center">
              <svg
                className="duration-300 group-hover:fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                width="26"
                fill={mode === "dark" ? "white" : "currentcolor"}
              >
                <path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18q0-.825.588-1.413Q5.175 16 6 16t1.412.587Q8 17.175 8 18q0 .825-.588 1.413Q6.825 20 6 20Zm6 0q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm6 0q-.825 0-1.413-.587Q16 18.825 16 18q0-.825.587-1.413Q17.175 16 18 16q.825 0 1.413.587Q20 17.175 20 18q0 .825-.587 1.413Q18.825 20 18 20ZM6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14ZM6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6t-.588 1.412Q6.825 8 6 8Zm6 0q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Zm6 0q-.825 0-1.413-.588Q16 6.825 16 6t.587-1.412Q17.175 4 18 4q.825 0 1.413.588Q20 5.175 20 6t-.587 1.412Q18.825 8 18 8Z" />
              </svg>
              <svg
                className="duration-300 group-hover:rotate-90"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-primary"
                  d="M11.2341 16.5873L14.6179 12.9779C15.1274 12.4344 15.1274 11.5564 14.6179 11.0129L11.2341 7.40354C10.411 6.53952 9 7.1527 9 8.39299V15.5979C9 16.8521 10.411 17.4653 11.2341 16.5873Z"
                  fill="#B5B5C3"
                />
              </svg>
              </Link>
              {specialData.grid != undefined && specialData.grid && (
      
                <Dropdown
            
                  specialMenu={specialData.grid}
                />
              )}
            </div>

            {Data != undefined &&
              Data &&
              Data.map((e, i) => {
                return (
                  <div
                    
                    className="hidden relative  lg:flex lg:items-center group  hover:pb-8 hover:-mb-8"
                    key={i}
                  >
                    <Link href={e.link}>

                    {e.name && (
                      <h3 className="info-14-16 duration-300 group-hover:text-primary ">
                        {e.name}
                      </h3>
                    )}
                    </Link>

                    {e.subMenu && <Dropdown subMenu={e.subMenu} />}

                    <svg
                      className="duration-300 group-hover:rotate-90"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-primary"
                        d="M11.2341 16.5873L14.6179 12.9779C15.1274 12.4344 15.1274 11.5564 14.6179 11.0129L11.2341 7.40354C10.411 6.53952 9 7.1527 9 8.39299V15.5979C9 16.8521 10.411 17.4653 11.2341 16.5873Z"
                        fill="#B5B5C3"
                      />
                    </svg>
                  </div>
                );
              })}
          </div>

          <div className="flex gap-5 items-center">
            <Link
              href="/register"
              className={`transparent-cta hidden ${
                login === true ? "lg:hidden" : "lg:block"
              }`}
            >
              sign up
            </Link>
            <Link
              href="/login"
              className={`cta hidden ${
                login === true ? "lg:hidden" : "lg:block"
              }`}
            >
              Log-in
            </Link>

            <div
              href={""}
              className={`hidden relative   group  hover:pb-8 hover:-mb-8  ${
                login === true ? "lg:block" : "lg:hidden"
              }`}
            >
              <Link href={"/asset"} className="lg:flex lg:items-center">

              <span className="info-14-16 duration-300 group-hover:text-primary ">
                Assets
              </span>
              <svg
                className="duration-300 group-hover:rotate-90"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-primary"
                  d="M11.2341 16.5873L14.6179 12.9779C15.1274 12.4344 15.1274 11.5564 14.6179 11.0129L11.2341 7.40354C10.411 6.53952 9 7.1527 9 8.39299V15.5979C9 16.8521 10.411 17.4653 11.2341 16.5873Z"
                  fill="#B5B5C3"
                />
              </svg>
              </Link>

              {specialData.assets != undefined && specialData.assets && (
                <Dropdown subMenu={specialData.assets.subMenu} right={true} />
              )}

              
            </div>
            {/* account */}
            <div
              href=""
              className={`group  hover:pb-8 hover:-mb-8 ${
                login === true ? "lg:block" : "lg:hidden"
              }`}
            >
              <Link href={""}>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={mode === "dark" ? "white" : "currentcolor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              </Link>

              {specialData.account != undefined && specialData.account && (
                <Dropdown
                  subMenu={specialData.account.subMenu}
                  right={true}
                  arrow={true}
                  height={true}
                  fixed_cta="Log Out"
                  svgType="log_out"
                />
              )}
            </div>
            {/* hamburger  */}
            <button
              className={`${show === false ? "hidden" : "none"} lg:hidden`}
              onClick={() => {
                setShow(false);
              }}
            >
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
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>

            <div className=" border-l border-line-clr  hidden lg:flex items-center gap-[10px]">
            

              {/* bell   */}
              <button className="ml-3 group relative">
              
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
                <NotificationHover />
              </button>
              {/* download */}
              <button className={`hidden md:block`}>
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
              </button>

              {/* global  */}
              <button className="group relative">
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
                {/* moon sun  */}
              </button>
              {mode === "light" ? (
                <button
                  onClick={() => {
                    setMode("dark");
                  }}
                  className="hidden md:block"
                >
                  <Image
                    src="/assets/icons/moon.svg"
                    alt="Menu Button"
                    width={24}
                    height={24}
                  />
                </button>
              ) : (
                <button
                  className="hidden md:block"
                  onClick={() => {
                    // debugger
                    setMode("light");
                  }}
                >
                  {/* sun */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={mode === "dark" ? "white" : "currentcolor"}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={mode === "dark" ? "white" : "currentcolor"}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* header-Menu  */}
          <SideMenu show={show} setShow={setShow} data={Data} />
        </nav>
      </header>
    </>
  );
};

// export const getServerSideProps = async (context)=> {
// //   let data= await fetch('http://localhost:3000/api/hello')
// // let nav= await data.json()
// console.log("runing")
//   return {
//     props: {name:"prince" }, // will be passed to the page component as props
//   }
// }
export default Header;
