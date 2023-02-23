import React from "react";
import GradientCard from "../snippets/gradientCard";
import "swiper/css";
import "swiper/css/autoplay";
const FlowSliderSec = () => {
  return (
    <>
      <section className="dark:bg-black-v-5 py-[80px]">
        <div className="container">
          <h2 className="hero-heading mb-4">Trade alongside the best</h2>
          <p className="info-14-24 mb-4">
            Follow and learn from the most successful traders and uncover the
            secrets to great returns.
          </p>
         
          <div className="qwe_animation">
            <div className="tmbAnimationXWrap" >
                <div className="tmbAnimationX">
                  <div className="tmbAnimationX_row">
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                  </div>
                  <div className="tmbAnimationX_row tmbAnimationX_row2">
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                  </div>
                </div>
                <div className="tmbAnimationX2">
                  <div className="tmbAnimationX_row">
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                  </div>
                  <div className="tmbAnimationX_row tmbAnimationX_row2">
                    <GradientCard/>
                    <GradientCard/>
                    <GradientCard/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlowSliderSec;
