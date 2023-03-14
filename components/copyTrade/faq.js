// import React from 'react'

// const Faq = () => {
//     return (
//         <section className='bg-[#fafafa] dark:bg-black-v-3 py-10 md:py-20'>
//             <div className='container '>
//           <h2 className='heading-28-40 font-serif mb-12'>FAQ</h2>

//             </div>
//         </section>
//     )
// }

// export default Faq

import { Fragment, useContext, useEffect, useRef, useState } from "react";
import FaqAccordianSingleOpen from "../snippets/faqAccordianSingleOpen";

const FaqSec = () => {
  let accordionData = [{
    quest:'1. What are the conditions for signing up as a copy trader? ',
    ans:'If you have particular market insights and are active in the market with well-established, professional trading strategies and excellent trading records, you are welcome to sign up.'
  },{
    quest:'2. When will profits be settled?',
    ans:'When a trader closes a position, if the copier has made a profit and met the criteria for profit sharing, the system will deduct the profit shared from the copier’s account in advance and perform settlement at 12 a.m. the next day by calculating the actual total profit of the copier on that day. The “actual total profit” is the profit that should be shared with the trader.'
  },
  {
    quest:'3. When can I receive a reply after signing up?',
    ans:'After clicking Sign Up, traders will receive feedback on their registration application within 24 hours. Look out for our response.'
  },
  {
    quest:'4. Can I manage my copiers?',
    ans:'1. You can view all your copiers and their account privileges under “My Copiers” on the Copy Trading homepage.',
  
  },

];
  const [rotate,setRotate]=useState(null)
  // set acordian to height
  const setHeight = (index) => {
    let accordion = document.querySelectorAll(".accordion");
    let height = accordion[index].scrollHeight;


    if (accordion[index].getAttribute("style")) {
      accordion[index].removeAttribute("style");
      setRotate(null)
    } else {
        accordion.forEach(e=>{
            if(e.getAttribute("style")){
                e.removeAttribute("style")
            }
        })
      accordion[index].setAttribute("style", `height:${height}px`);
      setRotate(index)
    }
  };
  return (
    <>
      <section className="py-10 md:py-20 dark:bg-black-v-2">
        <div className="container">
        <h2 className='heading-28-40 font-serif mb-12'>FAQ</h2>
          {accordionData &&
            accordionData.map((e, i) => {
              return (
                <FaqAccordianSingleOpen
                  setHeight={setHeight}
                  setRotate={setRotate}
                  rotate={rotate}
                  index={i}
                  key={i}
                  quest={e.quest}
                  ans={e.ans}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default FaqSec;
