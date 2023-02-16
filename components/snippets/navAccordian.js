// import {useRef,} from 'react'
import Link from "next/link";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";

const NavAccordian = (props) => {
  const ref = useRef(null);

  // set acordian to height
  const setHeight = (e) => {
    let height = ref.current.scrollHeight;

    let iconImg = e.currentTarget.querySelector("img");
    iconImg.classList.toggle("rotate-90");
    if (ref.current.getAttribute("style")) {
      ref.current.removeAttribute("style");
    } else {
      ref.current.setAttribute("style", `height:${height}px`);
    }
  };

  return (
    <>
      <h4
        className="info-14-20 py-2 flex align-center justify-between"
        onClick={setHeight}
      >
        <span>{props.heading}</span>
        <Image
          src="/assets/icons/down.svg"
          height={20}
          width={14}
          alt=""
          className="block duration-300"
        />
      </h4>
      <ul ref={ref} className="h-0 pl-3 overflow-hidden duration-300">
        {props.content &&
          props.content.map((elem, index) => {
            return (
              <Fragment key={index} >
                {elem.linkUrl && elem.linkText && (
                  <li  className="mt-3">
                    <Link href={elem.linkUrl} className="info-14 ">
                      {elem.linkText}
                    </Link>
                  </li>
                )}
              </Fragment>
            );
          })}
        {props.desc && <li className="mt-3 text-left text-black-v-2 dark:text-white">{props.desc}</li>}
        {props.date && <li className="mt-3 text-left info-12 dark:text-white">Notification Date</li>}
        {props.cta && <li className=" mt-3 info-12 text-right cursor-pointer">Read more </li>}
      </ul>
    </>
  );
};

export default NavAccordian;
