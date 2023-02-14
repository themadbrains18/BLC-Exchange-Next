import React from "react";
import Carousel from "../snippets/carousel";
import GradientCard from "../snippets/gradientCard";

const FlowSliderSec = () => {
  return (
    <>
      <section className="dark:bg-black-v-5 ">
        <div className="container">
          <h2 className="hero-heading mb-4">Trade alongside the best</h2>
          <p className="info-14-24 mb-4">
            Follow and learn from the most successful traders and uncover the
            secrets to great returns.
          </p>
          {/* <div>
            <div className="overflow-hidden z-10 grid grid-rows-2">
              <div
                // style={{ transform: "translateX(-10%)" }}
                className="text-white flex gap-8 z-10 duration-[30000ms] hover:translate-x-[-60%]"
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
               
                </div>
              <div
                // style={{ transform: "translateX(-10%)" }}
                className="text-white flex gap-8 z-10 duration-[30000ms] translate-x-[-60%]"
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
               
                </div>
            
               
              
            </div>
          </div> */}
          <Carousel loop={true}   card={true} />
          <Carousel loop={true} left_pad={30}   card={true} />
        </div>
      </section>
    </>
  );
};

export default FlowSliderSec;
