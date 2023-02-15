import React from "react";
import Image from "next/image";
const OnHandSec = () => {
  return (
    <>
      <section className="py-10 md:py-20">
        <div className="container">
          <h3 className="section-secondary-heading font-noto dark:text-black ">
            Why 100% on-hand reserves are so important
          </h3>
          <div className="bg-border-clr  rounded-2xl mt-10 flex ">
            <div className="p-24 pr-0 w-[50%] ">
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
          <div className=" relative inline-block w-[50%]">

          <div className=" relative rounded-2xl perspective md:after:content-[''] md:after:bg-primary md:after:absolute md:after:top-5 md:after:bottom-0 md:after:right-0 md:after:h-full md:after:w-full  p-24">
          <h3 className="section-secondary-heading font-noto z-[2]">
          The platform provides 100% reserves
              </h3>
              <ol className="list-disc pl-4">
                <li>
                  <div className=" flex justify-between info-14-20   mt-3 items-center">
                    <span>
                    It means that the platform has sufficient reserves
                    </span>
               
                  </div>
                </li>
                <li>
                  <div className="flex justify-between info-14-20 mt-3 items-center">
                    <span>
                    It effectively guarantees that users' assets are safe
                    </span>
               
                  </div>
                </li>
                <li>
                  <div className="flex justify-between info-14-20 mt-3 items-center">
                    <span>
                    The platform will have no issues paying 100% of any concentrated withdrawals of users' assets
                    </span>
                   
                  </div>
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
