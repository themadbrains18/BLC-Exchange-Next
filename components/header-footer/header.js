import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <header className="relative">
        <nav className=" flex justify-between p-5 dark:bg-black-v-4">
          <div className="flex items-center gap-5">
            <Image
              src="/assets/icons/companyLogo.svg"
              width={92}
              height={24}
              alt="Company Logo"
            />
            {}
            <div className="flex items-center ">
              <Link href="" className="info-14-16">
                Buy Crypto
              </Link>
              <Image src="/assets/icons/down.svg" height={20} width={14} />
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <Link href="" className="transparent-cta hidden md:block">
              sign up
            </Link>
            <Link href="" className="cta hidden md:block">
              Log-in
            </Link>

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
          </div>

          {/* header-Menu  */}

          <div
            className={`absolute p-5 duration-300 top-0 ${
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
              className="w-6 h-6 mr-0 ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
