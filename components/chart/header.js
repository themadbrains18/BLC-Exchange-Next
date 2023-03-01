import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <section className="p-5 dark:bg-black-v-1">
        <div className="flex gap-3 justify-between">
          <div className="flex gap-8">
            <h3 className="flex items-center gap-2 info-14-20 ">
              DOGE / USDT
              <Image
                src="/assets/icons/warning.svg"
                height={24}
                width={24}
                alt=""
              />
            </h3>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">Last Price</h4>
              <span className="info-14 leading-3 !text-primary">
                0.082041 ≈$ 0.082041
              </span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">Change</h4>
              <span className="info-14 leading-3 !text-primary">+ 1.47 %</span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">24H VOL</h4>
              <span className="info-14 leading-3 !text-primary">
                45087579.8379 DOGE
              </span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">High</h4>
              <span className="info-14 leading-3 !text-primary">0.083085</span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">Low</h4>
              <span className="info-14 leading-3 !text-primary">0.079910</span>
            </div>
            <div></div>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 96 960 960"
              width={24}
            >
              <path d="M720 616v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200 856V696h-40q-33 0-56.5-23.5T80 616v-80q0-33 23.5-56.5T160 456h160l200-120v480L320 696h-40v160h-80Zm100-280Zm260 134V442q27 24 43.5 58.5T620 576q0 41-16.5 75.5T560 710ZM160 536v80h182l98 58V478l-98 58H160Z" />
            </svg>
            <h4>Price Drop</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
