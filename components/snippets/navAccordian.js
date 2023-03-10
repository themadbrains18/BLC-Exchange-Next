// import {useRef,} from 'react'
import Link from "next/link";
import Image from "next/image";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Context from "../contexts/context";

const NavAccordian = (props) => {
  const ref = useRef(null);
  const { setClick } = useContext(Context)
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
    <div className="">
      <h4
        className={`info-14-16 text-[14px] py-3 flex align-center gap-4 justify-between ${props.showAccordian ? "openAccordian" : ""}`}
        style={{
          display: props.showAccordian ? 'none' : 'flex'
        }}
        onClick={setHeight}
      >
        <span className={`${props.className && props.className} whitespace-nowrap `}>{props.heading}</span>
        {props.blue
          ?
          <Image
            src="/assets/icons/bluearrow.svg"
            height={20}
            width={20}
            alt=""
            className="block duration-300"
          />
          :
          <Image
            src="/assets/icons/down.svg"
            height={20}
            width={14}
            alt=""
            className="block duration-300"
          />
        }

      </h4>
      <ul ref={ref} className="h-0 pl-[16px] overflow-hidden duration-300">
        {props.content &&
          props.content.map((elem, index) => {
            return (
              <Fragment key={index} >
                {elem.linkUrl && elem.linkText && (
                  <li className="mt-3 " >
                    <Link href={elem.linkUrl} className={`whitespace-nowrap info-14 ${props.className && " hover:border-r-2 hover:border-primary block"}`} onClick={() => {
                      setClick(false);
                      props.setShow && props.setShow(false);
                    }}>
                      {elem.linkText}
                    </Link>
                  </li>
                )}
              </Fragment>
            );
          })}
        {props.desc && <li className="mt-3 text-left md:info-14-16 text-[14px] text-black-v-2 dark:text-white relative before:absolute before:content before:bg-[#1da2b4] before:w-[8px] before:h-[8px] before:top-[50%] before:left-[-16px] before:rounded before:translate-y-[-50%]">
      
          {props.desc}
          </li>}
        {props.date && <li className="mt-3 text-left info-12 dark:text-grey">March 7th 2023, 12:32:08 pm</li>}
        {props.cta && <li className=" mt-3 info-12 text-right cursor-pointer dark:text-white">Read more </li>}
        {props.data &&
          props.data.map((elem, index) => {
            return (
              <Fragment key={index} >
                {elem.heading && elem.desc && (

                  <li className="mt-3 flex justify-between">
                    <p className="info-14 text-black-v-2 dark:text-white">{elem.heading}</p>
                    <p className="info-14 text-black ">
                      {elem.heading === 'Email' &&
                        <Link href={props.sessions !== undefined && props.sessions?.email == '' ? 'dashboard/bindemail' : ''}>
                          {props.sessions !== undefined && props.sessions?.email !== '' ? props.sessions.email : 'SetUp'}
                        </Link>
                      }

                      {elem.heading === 'Phone' &&
                        <Link href={props.sessions !== undefined && props.sessions?.number == '' ? 'dashboard/bindmobile' : ''}>
                          {props.sessions !== undefined && props.sessions?.number !== '' ? props.sessions.number : 'SetUp'}
                        </Link>
                      }

                      {elem.heading === 'UserID' &&
                        <>
                          {props.sessions !== undefined && props.sessions?.UID}
                        </>
                      }

                      {elem.heading === 'Last Login' &&
                        <>
                          {props.lastLogin}
                        </>
                      }

                    </p>
                  </li>
                )}
              </Fragment>
            );
          })}
      </ul>
      </div>
    </>
  );
};

export default NavAccordian;
