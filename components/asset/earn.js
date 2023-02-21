import React, { useState } from "react";
import DataTable from "../snippets/dataTable";
import Image from "next/image";
import Link from "next/link";
import ActiveCta from "../snippets/activeCta";

const Earn = ({ show }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div>
        <h4
          className="info-14 hover:!text-grey
                  "
        >
          Total Asset Value
        </h4>
        <span className="section-secondary-heading font-noto">
          {show ? <span>0</span> : <span>****</span>} BTC{" "}
          <span className="info-12 ">
            ≈$ {show ? <span>0</span> : <span>****</span>}
          </span>
        </span>
        <div className="flex flex-col gap-4 md:flex-row justify-between border-t border-border-clr pt-6 mt-6">
          <div className="">
            <ActiveCta
              data={["Savings", "BGB Earn", "Launchpool"]}
              type="second"
              setActive={setActive}
              active={active}
            />
          </div>
          <div className="flex justify-between md:flex-row gap-1">
            <Link
              href=""
              className="cta2 w-fit leading-[1] py-2 bg-[url('/assets/images/ctaBg.png')] bg-cover"
            >
              Start Earning
            </Link>
            <Link
              href={""}
              className="info-14 text-primary self-end dark:text-primary"
            >
              Order History
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-between flex-wrap gap-4">
          <div>
            <h4
              className="info-14 hover:!text-grey
                "
            >
              Total assets
            </h4>
            <span className="section-secondary-heading font-noto">
              ≈ {show ? <span>0.00000000</span> : <span>****</span>} BTC{" "}
              <span className="info-12 "></span>
            </span>
          </div>
          <div>
            <h4
              className="info-14 hover:!text-grey
                "
            >
              24H Profit
            </h4>
            <span className="section-secondary-heading font-noto">
              ≈ {show ? <span>0.00000000</span> : <span>****</span>} BTC{" "}
              <span className="info-12 "></span>
            </span>
          </div>
          <div>
            <h4
              className="info-14 hover:!text-grey
                "
            >
              Estimated Cumulative Profits
            </h4>
            <span className="section-secondary-heading font-noto">
              ≈ {show ? <span>0.00000000</span> : <span>****</span>} BTC{" "}
              <span className="info-12 "></span>
            </span>
          </div>
        </div>
        <div className="mt-4 bg-white dark:bg-black-v-1">
          <h4 className="info-14-20">Recommended products</h4>
          <div className="flex gap-3 flex-col md:flex-row">

          <div className="box w-full md:max-w-[220px] p-4  bg-white rounded-lg dark:bg-black-v-1 border border-border-clr">
            <div className="flex justify-between gap-3">
              <div className="flex">
                <img src="" alt="" className="logo" />
                <h4>Axs</h4>
              </div>

              {/* tag */}
              <span className="tag p-1 info-12 text-primary bg-[#d2ecf0] ">Flexible</span>
            </div>
            <h6 className="info-14 text-primary">20.00%</h6>
            <span className="info-12 text-black">Est. APR</span>
          </div>
          <div className="box w-full md:max-w-[220px] p-4  bg-white rounded-lg dark:bg-black-v-1 border border-border-clr">
            <div className="flex justify-between gap-3">
              <div className="flex">
                <img src="" alt="" className="logo" />
                <h4>Axs</h4>
              </div>

              {/* tag */}
              <span className="tag p-1 info-12 text-primary bg-[#d2ecf0] ">Flexible</span>
            </div>
            <h6 className="info-14 text-primary">20.00%</h6>
            <span className="info-12 text-black">Est. APR</span>
          </div>
          <div className="box w-full md:max-w-[220px] p-4  bg-white rounded-lg dark:bg-black-v-1 border border-border-clr">
            <div className="flex justify-between gap-3">
              <div className="flex">
                <img src="" alt="" className="logo" />
                <h4>Axs</h4>
              </div>

              {/* tag */}
              <span className="tag p-1 info-12 text-primary bg-[#d2ecf0] ">Flexible</span>
            </div>
            <h6 className="info-14 text-primary">20.00%</h6>
            <span className="info-12 text-black">Est. APR</span>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Earn;
