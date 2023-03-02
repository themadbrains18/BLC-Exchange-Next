import React, { useContext, useState } from "react";
import Icons from "../snippets/icons";
import Image from "next/image";
import Context from "../contexts/context";
const SearchBox = ({open,setOpen}) => {
  const [data, setData] = useState(true);
  const [iconChange, setIconChange] = useState(2);
  const [iconChange1, setIconChange1] = useState(2);
  const [iconChange2, setIconChange2] = useState(2);
  const { mode } = useContext(Context);
  return (
    <>
      <aside className={`absolute bg-white  bottom-[100%] ${open && "!bottom-[0%] z-[2] h-[70%] w-full"}  md:static  dark:bg-black-v-3 overflow-y-auto h-[100vh] overscroll-none` }>
        <div>
          <div className="flex gap-4 p-3">
            <div className="flex  grow">
              <div className="w-full">
                <div className="input-group relative flex flex-wrap items-stretch w-full ">
                  <input
                    type="search"
                    className="Search form-control relative flex-auto min-w-0 block w-full pl-7 pr-2 py-1 text-base font-normal text-gray-700 bg-transparent bg-clip-padding border border-solid border-grey rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-transparent focus:border-primary hover:border-primary focus:outline-none dark:text-white"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4 absolute top-[50%] -translate-y-[50%] left-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#a7b1bb"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button className="border border-primary px-3">
              <Icons type="transfer" stroke="true" />
            </button>
          </div>
          {/* table */}
          <div className="w-full ">
            <div className="  w-full  rounded-sm ">
              <div className={`head_row justify-between flex gap-4 items-start    `}>
                <button
                  className=" flex gap-2 items-center head_col p-3  info-12 text-base dark:text-white"
                  onClick={() => {
                    iconChange === 0
                      ? setIconChange(1)
                      : iconChange === 1
                      ? setIconChange(2)
                      : setIconChange(0);
                  }}
                >
                  <span>Coin</span>
                  <div className="flex flex-col ">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="px"
                      y="0px"
                      height={12}
                      width={12}
                      fill={
                        mode === "dark"
                          ? iconChange === 0
                            ? "#1da2b4"
                            : "white"
                          : "black"
                      }
                      className="rotate-180"
                      viewBox="0 0 386.257 386.257"
                      style={{ enableBackground: "new 0 0 386.257 386.257" }}
                      xmlSpace="preserve"
                    >
                      {" "}
                      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </svg>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="px"
                      y="0px"
                      fill={
                        mode === "dark"
                          ? iconChange === 1
                            ? "#1da2b4"
                            : "white"
                          : "black"
                      }
                      height={12}
                      width={12}
                      viewBox="0 0 386.257 386.257"
                      style={{ enableBackground: "new 0 0 386.257 386.257" }}
                      xmlSpace="preserve"
                    >
                      {" "}
                      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </svg>
                  </div>
                </button>

                <button
                  className=" flex text-left gap-2  head_col p-3  info-12 text-base dark:text-white"
                  onClick={() => {
                    iconChange1 === 0
                      ? setIconChange1(1)
                      : iconChange1 === 1
                      ? setIconChange1(2)
                      : setIconChange1(0);
                  }}
                >
                  <div>
                    <span>Last Price </span>
                    <span className="text-xs">(USD)</span>
                  </div>
                  <div className="flex flex-col ">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="px"
                      y="0px"
                      height={12}
                      width={12}
                      fill={
                        mode === "dark"
                          ? iconChange1 === 0
                            ? "#1da2b4"
                            : "white"
                          : "black"
                      }
                      className="rotate-180"
                      viewBox="0 0 386.257 386.257"
                      style={{ enableBackground: "new 0 0 386.257 386.257" }}
                      xmlSpace="preserve"
                    >
                      {" "}
                      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </svg>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="px"
                      y="0px"
                      fill={
                        mode === "dark"
                          ? iconChange1 === 1
                            ? "#1da2b4"
                            : "white"
                          : "black"
                      }
                      height={12}
                      width={12}
                      viewBox="0 0 386.257 386.257"
                      style={{ enableBackground: "new 0 0 386.257 386.257" }}
                      xmlSpace="preserve"
                    >
                      {" "}
                      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </svg>
                  </div>
                </button>

                <button
                  className=" flex gap-2 items-center head_col p-3  info-12 text-base dark:text-white"
                  onClick={() => {
                    iconChange2 === 0
                      ? setIconChange2(1)
                      : iconChange2 === 1
                      ? setIconChange2(2)
                      : setIconChange2(0);
                  }}
                >
                  <span>Change</span>
                  <div className="flex flex-col ">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="px"
                      y="0px"
                      height={12}
                      width={12}
                      fill={
                        mode === "dark"
                          ? iconChange2 === 0
                            ? "#1da2b4"
                            : "white"
                          : "black"
                      }
                      className="rotate-180"
                      viewBox="0 0 386.257 386.257"
                      style={{ enableBackground: "new 0 0 386.257 386.257" }}
                      xmlSpace="preserve"
                    >
                      {" "}
                      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </svg>
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="px"
                      y="0px"
                      fill={
                        mode === "dark"
                          ? iconChange2 === 1
                            ? "#1da2b4"
                            : "white"
                          : "black"
                      }
                      height={12}
                      width={12}
                      viewBox="0 0 386.257 386.257"
                      style={{ enableBackground: "new 0 0 386.257 386.257" }}
                      xmlSpace="preserve"
                    >
                      {" "}
                      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />{" "}
                   
                    </svg>
                  </div>
                </button>
              </div>
              {data ? (
                <div>
                  <div className="row  bg-white flex justify-between border-b w-full  border-border-clr dark:bg-black-v-1">
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                  </div>
                  <div className="row  bg-white flex justify-between border-b border-border-clr dark:bg-black-v-1">
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="xl:grid xl:place-content-center w-full ">
                  <div className="inline-grid">
                    <Image
                      src={"/assets/icons/noData.svg"}
                      alt="No Data"
                      className=""
                      height={200}
                      width={200}
                    />
                    <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                      No Data
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SearchBox;
