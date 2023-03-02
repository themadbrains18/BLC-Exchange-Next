import React from "react";

const FaqAccordianSingleOpen = ({setHeight,index,rotate,setRotate, quest,ans}) => {
  
  return (
    
    <>

        <div className="border border-border-clr mb-2 last:mb-0 rounded-md">
          <h2 className="mb-0" id="flush-headingOne">
            <button
            onClick={()=>{setHeight(index)}} 
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white section-secondary-heading font-noto"
              type="button"
              data-te-collapse-init=""
              data-te-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
             {quest}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`h-6 w-6 duration-300 ${rotate===index? "rotate-180":"rotate-90"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
           
            className="!visible border-0 h-0 accordion overflow-hidden duration-300"
            data-te-collapse-item=""
            data-te-collapse-show=""
            aria-labelledby="flush-headingOne"
            data-te-parent="#accordionFlushExample"
          >
            <div className="pb-4 px-5 info-14-16">
             {ans}
            </div>
          </div>
        </div>
 
    </>
  );
};

export default FaqAccordianSingleOpen;
