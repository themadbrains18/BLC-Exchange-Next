import React from "react";

const BannerSec = () => {
  return (
    <>
      <section className=" py-10 md:py-20 pt-[120px] bg-secondary dark:bg-black-v-2">
        <div className="container">
          <div className="flex ">
            <div className="flex flex-col gap-6 lg:gap-8 justify-center">
              <h3 className="hero-heading  font-noto">Proof of Reserves</h3>
              <p className="info-14-24 ">
                BLC-Exchange guarantees it will hold 100% of users' assets in reserves
                and will publish its Merkle Tree proof, platform reserves, and
                platform reserve ratio on a monthly basis
              </p>
              <span>
                <button className="cta mr-8">Proof of users' assets</button>
                <button className="cta2 px-6 ">GitHub</button>
              </span>
            </div>
            <img className="hidden lg:block max-w-[448px] w-full" src="/assets/images/boxLogo.png" alt="" />
          </div> 
        </div>
      </section>
    </>
  );
};

export default BannerSec;
