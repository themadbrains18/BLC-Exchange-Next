import React, { useEffect, useRef, useState } from "react";
import Carousel from "../snippets/carousel";
import GradientCard from "../snippets/gradientCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
const FlowSliderSec = () => {

  const qweWrap = useRef(null);
  const qweAnimation = useRef(null);

  let animationFrame;

  const animation = ()=>{
    if(qweWrap.current.style.transform){
      let lastValue = qweWrap.current.style.transform;
      lastValue = Number(lastValue.replace("translateX(","").replace("px)",""));
      if(qweAnimation.current.offsetWidth <= Math.abs(lastValue)){
        qweWrap.current.style.transform = `translateX(0px)`;
      }else{
        if(typeof(lastValue) === "number"){
          qweWrap.current.style.transform = `translateX(${lastValue - 1}px)`;
        }else{
          qweWrap.current.style.transform = `translateX(0px)`;
        }
      }
      animationFrame = requestAnimationFrame(animation);
    }
  }

  useEffect(()=>{
    qweWrap.current.style.width = `${qweAnimation.current.offsetWidth * 2}px`;
    qweWrap.current.style.transform = `translateX(0px)`;
    animationFrame = requestAnimationFrame(animation);
    return ()=>{
      cancelAnimationFrame(animationFrame);
    }
  },[])

  return (
    <>
      <section className="dark:bg-black-v-5 py-[80px]">
        <div className="container">
          <h2 className="hero-heading mb-4">Trade alongside the best</h2>
          <p className="info-14-24 mb-4">
            Follow and learn from the most successful traders and uncover the
            secrets to great returns.
          </p>
          <div className="qwe_animation" style={{overflow:"hidden"}}>
            <div className="qwe_wrap" ref={qweWrap}>
              <div>
                <div className="qwe" ref={qweAnimation}>
                  <GradientCard/>
                  <GradientCard/>
                  <GradientCard/>
                </div>
                <div className="qwe qwe2">
                  <GradientCard/>
                  <GradientCard/>
                  <GradientCard/>
                
                </div>
              </div>
              <div>
              <div className="qwe" ref={qweAnimation}>
                  <GradientCard/>
                  <GradientCard/>
                  <GradientCard/>
                </div>
                <div className="qwe qwe2">
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
