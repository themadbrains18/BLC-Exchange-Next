import { Fragment, useContext, useEffect, useRef, useState } from "react";
import FaqAccordianSingleOpen from "../snippets/faqAccordianSingleOpen";

const FaqSec = () => {
  let accordionData = [1, 2, 3, 4];
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
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default FaqSec;
