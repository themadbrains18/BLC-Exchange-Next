import React, { useContext, useRef, useState, useEffect } from "react";

import Context from "../contexts/context";
const SelectMenu = ({font12,height150,borderBottom, clear, returnvals, type, all, selectMenu, selectNetwork,selectTime,selectMethod, getDepositAddress, network, deposit, transfer, from, to, setFromWallet, setToWallet, fromValue }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState('');
  const [overlay, setOverlay] = useState(false);
  const ref = useRef(null);
  const { mode } = useContext(Context)
  const dropdown = useRef(null);

  useEffect(() => {
    all & setActive("all")
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setOpen(false);
        setOverlay(false);
      }
    }
    window.addEventListener("click", handleClick);
    if (clear)
      setValue('Please Select')
    // clean up
    return () => window.removeEventListener("click", handleClick);


  }, [clear])


  const onSelectOption = (e, i) => {
    setValue(e.name);
    setOpen(false)
    setActive(i);
    setOverlay(false);
    if (from === true) {
      setFromWallet(e)
    }
    if (to === true) {
      setToWallet(e)
    }
  }

  // ===================== eventmanger ====================== // 

  const eventManager = (e, i) => {
    if (type == "withdraw") {
      setValue(e.symbol)

    } else if (type == "days") {  // please add other event under if else block
      setValue(e)
      returnvals({ "type": "days", "obj": e })
    }else if(type  == "paymentList"){
      setValue(e.payment_method)
      returnvals({ "type": "paymentList", "obj": e })
    }else {
      (network ? setValue(e.networkName) : setValue(e))
      selectNetwork && selectNetwork(e)
      selectMethod && selectMethod(e)
      if(type== 'deposit'){
        setValue(e)
        returnvals({ "type": "token", "obj": e })
      }
      selectTime && selectTime(e)
    }

    getDepositAddress && getDepositAddress(e.type)
    setOpen(false)
    setOverlay(!overlay);
    setActive(i);

  }


  return (
    <>
      <div ref={dropdown} className={`relative pr-2 z-initial  ${open && "md:z-[2]"} ${borderBottom ? "border-b border-grey":""}`}>
        <div className="flex bg-transparent justify-between items-center">
          <input
            type="text"
            name=""
            id=""
            className=" max-w-none font-noto caret-white placeholder:text-disable-clr p-2 pr-0 outline-none bg-transparent w-full  info-16 dark:text-white dark:caret-black"
            placeholder="Please Select"
            value={(transfer && fromValue !== '') ? fromValue : value}
            onClick={() => {
              setOpen(!open);
              setOverlay(!overlay);
            }}
            onChange={() => {
              console.log('')
            }}

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
            } border  duration-300 `}>
          <div className="relative  ">
            <div className="hidden md:block p-1 -mt-[5px] z-0 bg-white -rotate-45 absolute left-10 dark:bg-black-v-4"></div>
          </div>
          <div
            className={` bg-black  opacity-0 invisible transition-[opacity] duration-300 fixed top-0 left-0 h-full w-full ${overlay && "!visible opacity-75 z-[3] md:hidden"
              }`}
          ></div>
          <div
            className={`${height150 ? "md:h-[150px] md:overflow-y-auto":""}  h-[250px] overflow-y-auto bottom-[60px] rounded-t-xl md:static md:rounded-none md:w-[unset] fixed -bottom-[100%] left-0 w-full bg-white dark:bg-black dark:text-white dur ${open && "bottom-[0%] z-[4]"
              }`}
          >
            <span className="block md:hidden my-2 p-2 rounded-xl">
              Please Select
            </span>

            {!transfer &&
              <>
                {
                  all &&
                  <button
                    className={`md:relative  ${open && "z-[2]"
                      } ${font12 ? "info-12":"info-14-16"}  block w-full text-left p-2 dark:text-white dark:bg-black  ${active === "all" &&
                      "bg-blue-50 text-primary dark:!text-primary"
                      }`}
                    onClick={() => {
                      console.log("-====network", network)
                      setValue("ALL");
                      selectNetwork && selectNetwork('all')
                      returnvals({ "type": "token", "obj": 'all' })
                      setOpen(false)
                      setActive("all");
                    }}
                  >
                    ALL
                  </button>
                }
                {selectMenu &&

                  selectMenu.map((e, i) => {
                    let title;
                    if(network){
                      title = e.networkName
                    }else if(type == "withdraw"){
                      title = e.symbol
                    }else if(type == "paymentList"){
                      title = e.payment_method
                    }else{
                      title = e
                    }

                    return (
                      <button
                        key={i}
                        type="button"
                        className={`md:relative ${open && "z-[2]"
                          }  ${font12 ? "info-12":"info-14-16"} block w-full text-left p-2 dark:text-white dark:bg-black  ${active === i &&
                          "bg-blue-50 text-primary dark:!text-primary"
                          }`}
                        onClick={() => {
                          eventManager(e, i)

                        }}
                      >
                        {title}
{/*                        
                        {(type == "withdraw") ? e.symbol : (network ? e.networkName : e)} */}

                      </button>
                    );
                  })
                }
              </>
            }


            {transfer === true &&
              <>
                {selectMenu &&
                  selectMenu.map((item, i) => {
                    return (
                      <button type="button"
                        key={i}
                        className={`md:relative ${open && "z-[2]"
                          }  ${font12 ? "info-12":"info-14-16"} block w-full text-left p-2 dark:text-white dark:bg-black  ${active === i &&
                          "bg-blue-50 text-primary dark:!text-primary"
                          }`}
                        onClick={(e) => {
                          e.preventDefault()
                          onSelectOption(item, i)
                        }}
                      >
                        {item.name}
                      </button>
                    );
                  })
                }
              </>
            }

            <button
              className="fixed bottom-0 p-4 dark:bg-[#000] bg-white w-full border-t-4 md:hidden"
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
