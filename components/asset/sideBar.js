import Image from "next/image";
import { useState } from "react";
import Icons from "../snippets/icons";

const SideBar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <section className="px-4 ">
        <button
          className="flex items-center"
          onClick={() => {
            setShow(true);
          }}
        >
          <h3 className="section-secondary-heading font-noto">Assets</h3>
          <Image
            src={"/assets/icons/rightArrowSmall.svg"}
            width={24}
            height={24}
            alt=""
          ></Image>
        </button>

        <div
          className={`absolute top-0 z-10 w-full ${
            show ? "left-0" : "-left-[100%]"
          } bg-white`}
        >
          <div className="text-end p-4 border-b border-border-clr">
            <button
              className="ml-auto mr-0"
              onClick={() => {
                setShow(false);
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
            <li className="flex">
               
                <Icons type="deposite"/>

              <span>Overview</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
