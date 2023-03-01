import React from "react";
import StepsCardSnippet from "./stepsCardSnippet";

const StepsCardSec = ({ cardData }) => {
  return (
    <>
      <section className="py-10 md:py-20 dark:bg-black-v-5">
        <div className="container">
          <h4 className="section-secondary-heading font-noto text-center mb-4 md:mb-8">
            How It Works?
          </h4>
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 justify-between px-4 py-4 ">
            
            {cardData &&
              cardData.map((e, i) => {
                return (
                  <StepsCardSnippet
                    key={i}
                    svgType={e.svgType}
                    heading={e.heading}
                    desc={e.desc}
                    index={i + 1}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StepsCardSec;
