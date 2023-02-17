import Link from "next/link";
import React from "react";
import DataTable from "../snippets/dataTable";

const ReserveDetails = () => {
  let arr = [
    "BITCOIN block height: 774403",
    "Binance Smart Chain block height: 25249920",
    "Ethereum block height: 16523685",
    "Solana block height: 175256199",
    "Tron block height: 48176673",
    "Arbitrum One block height: 56775794",
  ];
  return (
    <>
      <section className="py-10 md:py-20 dark:bg-black-v-3">
        <div className="container">
          <h3 className="section-secondary-heading font-noto font-bold ">
            Bitget reserve details{" "}
          </h3>

          <div className="flex flex-wrap gap-4 mt-8">
            <h4 className="info-14-24 whitespace-nowrap self-start">
              Block height
            </h4>

            {arr.map((e, i) => {
              return (
                <span
                  className="p-3 bg-border-clr rounded-2xl whitespace-nowrap "
                  key={i}
                >
                  {e}
                </span>
              );
            })}
          </div>
          <DataTable />

          <p className="mt-4 info-14 hover:!text-grey">
            179 users have verified the authenticity of the data.{" "}
            <Link
              href={"https://github.com/BitgetLimited/proof-of-reserves"}
              target="_blank"
              className="text-primary"
            >
              See for yourself
            </Link>{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default ReserveDetails;
