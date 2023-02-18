import React from "react";
import Image from "next/image";
const OnHandSec = () => {
  return (
    <>
      <section className="py-10 lg:py-20 dark:bg-black-v-1">
        <div className="container">
          <h3 className="section-secondary-heading font-noto ">
            Why 100% on-hand reserves are so important
          </h3>
          <div className="lg:relative bg-table-bg rounded-2xl mt-10 flex flex-col-reverse lg:flex-row ">
         
            <div className="p-5 lg:py-16 lg:px-8 h-[50%] lg:h-[unset]  lg:w-[40%] ">
             

              <h3 className="section-secondary-heading font-noto dark:text-black">
                Unable to prove 100% on-hand reserves
              </h3>
              <ol className="list-disc pl-4">
                <li>
                  <div className=" flex gap-4 justify-between info-14-20 text-grey dark:text-grey  mt-3 items-center">
                    <span>
                      It can be a telltale sign of the misappropriation of
                      assets
                    </span>
                    <Image
                      src="/assets/images/redCross.png"
                      height={15}
                      width={15}
                    />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between info-14-20 text-grey dark:text-grey  mt-3 items-center">
                    <span>
                      And a source of low risk tolerance for black swan events
                    </span>
                    <Image
                      src="/assets/images/redCross.png"
                      height={15}
                      width={15}
                    />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between info-14-20 text-grey dark:text-grey mt-3 items-center">
                    <span>
                      Concentrated withdrawals can lead to a run, which may
                      result in a loss of users' assets
                    </span>
                    <Image
                      src="/assets/images/redCross.png"
                      height={16}
                      width={16}
                    />
                  </div>
                </li>
              </ol>
            </div>  
            <div className="grid place-items-center -mt-[27px] lg:mt-0 lg:top-[50%] lg:left-[45%] lg:absolute lg:-translate-x-[50%] lg:-translate-y-[50%] z-[1]">

            <Image
                src={"/assets/images/vsLogo.png"}
                height={150}
                width={150}
                className="  w-14 h-14 lg:w-40 lg:h-40"
                />
                </div>
            <div className="p-5 lg:p-0 rounded-2xl bg-primary lg:bg-transparent relative inline-block lg:w-[60%] lg:after:rounded-2xl perspective lg:after:content-[''] lg:after:bg-primary lg:after:absolute lg:after:top-0 lg:after:bottom-0 lg:after:right-0 h-[50%] lg:h-[unset] lg:after:h-full lg:after:w-full  ">
              <div className=" relative lg:max-w-md w-full lg:ml-auto lg:mt-16 lg:mr-14 ">
                <h3 className="section-secondary-heading font-noto relative z-[1] text-white">
                  The platform provides 100% reserves
                </h3>
                <ol className="list-disc pl-4">
                  <li className="relative z-[1] text-white">
                    <span className=" flex justify-between info-14-20   mt-3 items-center relative z-[1] text-white">
                      It means that the platform has sufficient reserves
                    </span>
                  </li>
                  <li className="relative z-[1] text-white">
                    <span className="flex justify-between info-14-20 mt-3 items-center relative z-[1] text-white">
                      It effectively guarantees that users' assets are safe
                    </span>
                  </li>
                  <li className="relative z-[1] text-white">
                    <span className="flex justify-between info-14-20 mt-3 items-center relative z-[1] text-white">
                      The platform will have no issues paying 100% of any
                      concentrated withdrawals of users' assets
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnHandSec;
