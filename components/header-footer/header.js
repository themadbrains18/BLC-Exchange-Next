import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <header className="relative">
        <nav className=" flex justify-between p-5 dark:bg-black-v-4">
          <Image src="/assets/icons/companyLogo.svg" width={92} height={24} alt="Company Logo"/>

          <Image
            src="/assets/icons/hamburger.svg"
            alt="Menu Button"
            width={24}
            height={24}
            onClick={() => {
              setShow(false);
            }}
            className={`${show === false && "hidden"}   `}
          />
          {/* header-Menu  */}
          <div
            className={`absolute p-5 duration-300 top ${
              show === false ? "right-0" : "right-[-100%]"
            }`}
          >
            <svg
             onClick={() => {
                setShow(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <h3 className="text-black">dljfhdfhd</h3>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
