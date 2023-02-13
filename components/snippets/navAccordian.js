// import {useRef,} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRef,useState } from 'react';


const NavAccordian = (props) => {

    const ref= useRef(null);

    // set acordian to height
    const  setHeight = (e)=>{
        if(window.innerWidth < 640){

            let height = ref.current.scrollHeight;

            let iconImg = e.currentTarget.querySelector("img");
            iconImg.classList.toggle("rotate-90");
            if(ref.current.getAttribute("style")){
                ref.current.removeAttribute("style");
                
                
            }else{
                ref.current.setAttribute("style",`height:${height}px`);
            }
        }
    }

    
  return (
    <>
        <h4 className='info-14-20 sm:mb-6 flex align-center justify-between' onClick={setHeight}>
            <span>{props.heading}</span>
            <Image
                src="/assets/icons/down.svg"
                height={20}
                width={14}
                alt=""
                className="block sm:hidden duration-300"
              />
            </h4>
        <ul ref={ref} className="h-0 pt-4 pl-4 sm:pl-0 sm:pb-0 overflow-hidden sm:h-auto duration-300" style={{ height: `${props.setHeight}px` }}> 
            {props.content && props.content.map((elem,index)=>{ 
                return(
                        
                            elem.linkUrl && elem.linkText && 
                    <li key={index} className='mb-5 last:mb-0'>
                        <Link href={elem.linkUrl} className='info-14 '>{elem.linkText}</Link>
                        </li>
                        
                )
            })}
        </ul>
    </>
  )
}

export default NavAccordian;