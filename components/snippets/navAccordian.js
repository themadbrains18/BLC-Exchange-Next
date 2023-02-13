// import {useRef,} from 'react'
import Link from 'next/link';
import { useRef } from 'react';


const NavAccordian = (props) => {
    const ref= useRef(null);

    // set acordian to height
    const  setHeight = ()=>{
       
        // if(window.innerWidth < 640){

            let height = ref.current.scrollHeight;
            // console.log(height);
            if(ref.current.getAttribute("style")){
                ref.current.removeAttribute("style");
                
            }else{
            ref.current.setAttribute("style",`height:${height}px`)

            }
        // }
    }

    
  return (
    <>
        <h4 className='info-14-20 sm:mb-6' onClick={setHeight}>{props.heading}</h4>
        <ul ref={ref} className="h-0 pt-4 pl-4 sm:pl-0 sm:pb-0 overflow-hidden sm:h-auto duration-300" style={{ height: `${props.setHeight}px` }}> 
            {props.content && props.content.map((elem,index)=>{ 
                return(
                    <li key={index} className='mb-5'>
                        <Link href={elem.linkUrl} className='info-14 '>{elem.linkText}</Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default NavAccordian;