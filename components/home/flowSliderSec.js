import React from "react";
import Carousel from "../snippets/carousel";
import GradientCard from "../snippets/gradientCard";

const FlowSliderSec = () => {
  // const handelCard= (()=>{
  //   for (let index = 1; index < 5 ; index++) {
  //     console.log("hi")
  //     for (let i = 0; i < 1; i++) {
  //     return<GradientCard/>
      
  //   }
  //   }
  // })
  return (
    <>
      <section className="dark:bg-black-v-5 ">
        <div className="container">
          <h2 className="hero-heading mb-4">Trade alongside the best</h2>
          <p className="info-14-24 mb-4">
            Follow and learn from the most successful traders and uncover the
            secrets to great returns.
          </p>
         <div>
            <div className="overflow-hidden z-[0] grid grid-rows-2 tmb">
              <div className="flex ">
                <div
                  // style={{ transform: "translateX(-10%)" }}
                  className="text-white flex gap-8 z-[0]  marquee"
                >
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                  </div>
                <div
                  // style={{ transform: "translateX(-10%)" }}
                  className="text-white flex gap-8 z-[0]  marquee2 "
                >
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                  </div>
                </div>
              {/* <div
                // style={{ transform: "translateX(-10%)" }}
                className="text-white flex gap-8 z-[0] marquee"
              >
           

                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
                <GradientCard/>
               
                </div>  */}
            
               
              
            </div>
          </div> 
         
        </div>
      </section>
    </>
  );
};

export default FlowSliderSec;
