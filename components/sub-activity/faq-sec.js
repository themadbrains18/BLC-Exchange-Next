import { Fragment, useContext, useEffect, useRef, useState } from "react";
import FaqAccordianSingleOpen from "../snippets/faqAccordianSingleOpen";

const FaqSec = () => {
  let accordionData = [{
    quest:'What is BLC-Exchange GroupCoin?',
    ans:'BLC-Exchange GroupCoin is a platform offering featured cryptocurrencies at discounted prices. Find more participants to join (or pledge) a group purchase for even better deals'
  },{
    quest:'What payment options does BLC-Exchange GroupCoin accept?',
    ans:'USDT is commonly used to make pledges and purchases on GroupCoin, but we have designed flexible payment options. For payment details for specific pledges, see the Event Rules section'
  },
  {
    quest:'How will referral rewards be distributed?',
    ans:'From 15th August 2021, all referral rewards are distributed in WRX irrespective of the trading fee being paid in INR, USDT, WRX or BTC. Rewards earned before 15th August 2021 remain unaffected and will not be touched.'
  },
  {
    quest:'Can I use my pledges for platform transactions?',
    ans:'Once you enroll in a GroupCoin event, the designated USDT (or other specified crypto) used for pledging will be locked in during the event. The locked funds cannot be used for trading and will only be returned after the purchase is complete'
  },
  {
    quest:'Can I raise my pledge amount after an initial pledge?',
    ans:'Once your pledge is completed, and the funds are locked, you can no longer modify your pledge amount'
  },
  {
    quest:'When will I receive the featured crypto I bought?',
    ans:'We will issue the featured crypto approximately 30 minutes after the event ends. You can check your purchased crypto afterwards via your wallet'
  },
  {
    quest:'When can I start trading with the featured crypto I bought?',
    ans:'Once you receive your crypto, you can trade with them immediately on BLC-Exchange'
  }
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
            <h3 className="hero-heading mb-[40px]">Faq</h3>
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
