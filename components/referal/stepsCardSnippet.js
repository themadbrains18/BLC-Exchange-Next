import React from "react";
import Icons from "../snippets/icons";

const StepsCardSnippet = ({ index, desc, heading, svgType }) => {
  return (
    <>
      <div className="py-10 px-4 shadow grid place-items-center gap-8 dark:bg-black-v-2 rounded ">
        {svgType && <Icons type={svgType} />}
        {heading && <h4 className="section-secondary-heading font-noto text-center whitespace-nowrap">{heading}</h4>}
        {desc && <p className="info-14-16 text-center">{desc}</p>}
        {
          index && <span className="hero-heading font-noto  text-right text-disable-clr ml-auto mr-2">{index}</span>
        }
      </div>
    </>
  );
};

export default StepsCardSnippet;
