import { Fragment, useContext, useEffect, useRef, useState } from "react";
import FaqAccordianSingleOpen from "../snippets/faqAccordianSingleOpen";

const FaqSec = () => {
  let accordionData = [{
    quest:'How much can I earn in this referral program?',
    ans:'You can earn unlimited rewards! Every time your friend trades, you get 50% of their trading fees as reward in WRX. The more your friend trades, the more you earn.'
  },{
    quest:'When will the referral rewards be credited to my account?',
    ans:'All rewards earned for a day are credited to your account at once in the next 24 hours. Usually early in the morning.'
  },
  {
    quest:'How will referral rewards be distributed?',
    ans:'From 15th August 2021, all referral rewards are distributed in WRX irrespective of the trading fee being paid in INR, USDT, WRX or BTC. Rewards earned before 15th August 2021 remain unaffected and will not be touched.'
  },
  {
    quest:'Do you have any tips that will help me earn more rewards?',
    ans:'Share your invite link with as many friends as you can. The more friends you share it with, the more likely they are to sign up. Use social media, chat and emails to share your invite link'
  },
  {
    quest:'How do I know if my friend has successfully signed up via my referral link?',
    ans:'When a friend completes sign up via your referral link, their email will get added in "Referred friends" tab below your referral link. You can start receiving rewards as soon as they complete KYC verification and start trading.'
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
