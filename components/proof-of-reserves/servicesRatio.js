import Image from "next/image";
import React from "react";

const ServicesRatio = () => {
  let obj = {
    cardOne: [
      {
        img_url: "roothash.png",
        heading: "Merkle root hash",
        desc: " The Merkle tree generated from all balances has 23 layer(s) and 3054871 record(s) for secure and efficient verification",
        code: "bab4dcc0b4020956",
      },
      {
        img_url: "roothash.png",
        heading: "Total reserve ratio",
        desc: "BLC-Exchange holds more than 100% of the users' total assets (BTC, ETH, USDT)",
        code: "227%",
      },
    ],
    cardTwo: [
      {
        img_url: "bitcoin.png",
        heading: "BTC reserve ratio",
        percent: "620%",
        specialText: "Reserves are sufficient",
        details: [
          {
            heading: "BLC-Exchange wallet reserves",
            value: "8163.65 BTC",
          },
          {
            heading: "BLC-Exchange users' assets",
            value: "1316.48 BTC",
          },
        ],
      },
      {
        img_url: "tIcon.png",
        heading: "BTC reserve ratio",
        percent: "620%",
        specialText: "Reserves are sufficient",
        details: [
          {
            heading: "BLC-Exchange wallet reserves",
            value: "8163.65 BTC",
          },
          {
            heading: "BLC-Exchange users' assets",
            value: "1316.48 BTC",
          },
        ],
      },
      {
        img_url: "daimond.png",
        heading: "BTC reserve ratio",
        percent: "620%",
        specialText: "Reserves are sufficient",
        details: [
          {
            heading: "BLC-Exchange wallet reserves",
            value: "8163.65 BTC",
          },
          {
            heading: "BLC-Exchange users' assets",
            value: "1316.48 BTC",
          },
        ],
      },
    ],
  };

  return (
    <>
      <section className="py-10 md:20 dark:bg-black-v-3">
        <div className="container">
          <div className="">
            <h3 className="section-secondary-heading mb-4 font-noto">
              The latest BLC-Exchange reserve ratio
            </h3>
            <p className="info-14-16 mb-4 ">
              Reserve ratio = funds in the platform/funds of platform users. A
              reserve ratio greater than or equal to 100% means that the
              platform has sufficient funds.
            </p>
          </div>
          {/* timezone */}
          <div className="timezone"></div>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 ">
            {obj.cardOne.map((e, i) => {
              return (
                <ul
                  key={i}
                  className=" flex flex-col gap-4 md:gap-14 justify-between p-7 rounded-xl bg-secondary max-w-full w-full md:max-w-md"
                >
                  <li className="flex gap-2 md:gap-8 ">
                    <Image
                      src={`/assets/images/${e.img_url}`}
                      width={80}
                      height={80}
                      className="h-20 md:w-32 md:h-36"
                    />
                    <div>
                      <h3 className="info-16-22 text-black">
                        {e.heading}
                      </h3>
                      <p className="info-14-16 mt-2 max-w-full w-full md:max-w-[192px] dark:text-black">
                        {e.desc}
                      </p>
                    </div>
                  </li>
                  <li className="bg-white text-center  md:p-4 rounded-lg">
                    <span className="info-16-22 font-bold leading-8">
                      {e.code}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
          {/* car1 */}
          <div className="flex flex-col lg:flex-row  md:justify-center gap-4 mt-4 lg:mt-16 ">
            {obj.cardTwo.map((e, i) => {
              return (
                <ul
                  key={i}
                  className=" flex flex-col gap-4  border border-border-clr justify-between p-7 rounded-xl max-w-full w-full lg:max-w-fit"
                >
                  <li className="flex gap-2 md:items-center ">
                    <Image
                      src={`/assets/images/${e.img_url}`}
                      width={64}
                      height={64}
                      className="h-16"
                    />
                    <div>
                      <h3 className="info-16-22">
                        {e.heading}
                      </h3>
                      <div className="flex gap-3 ">
                        <span className="section-secondary-heading font-noto ">
                          {e.percent}
                        </span>
                        <span className="flex ">

                        <span className="info-16-22 lg:text-base text-primary">
                          <img src="/assets/images/blueLogo.png" className="w-4 h-4 inline mr-2 align-middle" alt="" />
                          {e.specialText}
                        </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="h-[1px] w-full bg-border-clr"></li>
                  <li className="">
                    {e.details.map((e, i) => {
                      return (
                        <div key={i} className="flex justify-between gap-3">
                          <h3 className="info-16-22 lg:text-base ">{e.heading}</h3>
                          <span className="info-16-22 lg:text-base text-black dark:text-white last:font-bold">{e.value}</span>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesRatio;
