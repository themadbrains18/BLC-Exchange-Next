import { useState } from "react";
import Image from "next/image";
import Coin1 from "../../public/assets/images/coin1.png";
import Graph from "../../public/assets/images/graph.png";
import InsightCard from "../snippets/insight-card";
const Trending = () => {
  const [show, setShow] = useState(1);
  return (
    <section className="py-20 dark:bg-black-v-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="max-w-full grow xl:max-w-[70%] w-full">
            <div className={`flex items-end gap-5 mb-[40px]`}>
              <button
                className={`${
                  show === 1 ? "hero-heading" : "section-secondary-heading"
                }`}
                onClick={() => {
                  setShow(1);
                }}
              >
                Trending
              </button>
              <button
                className={`${
                  show === 2 ? "hero-heading" : "section-secondary-heading"
                }`}
                onClick={() => {
                  setShow(2);
                }}
              >
                Innovation
              </button>
            </div>
            <div>
              {show === 1 && (
                <>
                 

                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {show === 2 && (
                <>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>

                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>


                  {/* extra entries */}
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8] cursor-pointer">
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={Coin1}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div className="flex items-end gap-2 flex-wrap	">
                          <p className="info-14-24">PSI</p>
                          <p className="info-14-16 !text-grey">USDT</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 flex-wrap	">
                        <p className="info-14-24">₮ 6.8954</p>
                        <p className="info-14-16 !text-grey">$ 6.90</p>
                      </div>
                      <p className="info-14-16 !text-primary">+25%</p>
                      <div>
                        <Image src={Graph} alt="" width={150} height={30} />
                      </div>
                    </div>
                  </div>
                  
                </>
              )}
            </div>
          </div>
          {/* <div className="max-w-full lg:max-w-[30%] w-full">
            <div className=" grid-cols-1 grid divide-y">
              <InsightCard />
              <InsightCard />
              <InsightCard />
            </div>
          </div> */}
          <div className="max-w-full lg:max-w-[30%] w-full tmbAnimationYWrap">
            <div className="tmbAnimationY">
              <InsightCard />
              <InsightCard />
              <InsightCard />
            </div>
            <div className=" tmbAnimationY2">
              <InsightCard />
              <InsightCard />
              <InsightCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trending;
