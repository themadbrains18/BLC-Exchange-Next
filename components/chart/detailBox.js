import React, { useContext, useState } from "react";
import Context from "../contexts/context";
import ActiveCta from "../snippets/activeCta";
import Graph from "components/chart/graph";

const DetailBox = ({ mobile }) => {
  let ctas = ["Order Book", "Markets Trades"];
  let ctaMobile = ["Chart", "Order Book", "Markets Trades"];
  const [active, setActive] = useState(0);
  const { mode } = useContext(Context);
  const [data, setData] = useState(true);

  let arr = [1, 1, 1, 1, 1, 1];
  // if(window.innerWidth)
  return (
    <>
      <section
        className={` dark:bg-black-v-3 h-full border-b-4 ${mode === 'dark' ? 'border-black' : 'border-gray-200'} ${
          mobile ? "w-full" : "min-w-[340px]"
        }`}
      >
        <div className="">
          <div className="bg-table-bg dark:bg-transparent px-4 pt-3">
            {mobile ? (
              <ActiveCta
                data={ctaMobile}
                active={active}
                setActive={setActive}
              />
            ) : (
              <ActiveCta data={ctas} active={active} setActive={setActive} />
            )}
          </div>
          {active === (mobile && 0) && <Graph />}
          {/* order book table */}
          {active === (mobile ? 1 : 0) && (
            <div className="  w-full  rounded-sm  overflow-y-auto h-[100vh] ">
              <div
                className={`head_row justify-between flex gap-4 items-start    `}
              >
                <h4 className=" flex gap-2 items-center head_col p-3  info-12 text-base dark:text-white">
                  SBM
                </h4>

                <h4 className=" flex  gap-2  head_col p-3  info-12 text-base dark:text-white">
                  Price(USDT)
                </h4>

                <h4 className=" flex gap-2 items-center head_col p-3  info-12 text-base dark:text-white">
                  Amount(ETH)
                </h4>
              </div>
              {data ? (
                <div>
                  {arr &&
                    arr.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="row  bg-white flex justify-between border-b w-full  border-border-clr dark:bg-black-v-1"
                        >
                          <h4 className="col info-12  p-3 text-black dark:text-white">
                            {" "}
                            data
                          </h4>
                          <h4 className="col info-12  p-3 text-black dark:text-white">
                            {" "}
                            data
                          </h4>
                          <h4 className="col info-12  p-3 text-black dark:text-white">
                            {" "}
                            data
                          </h4>
                        </div>
                      );
                    })}
                  <div className="grid my-8 mx-4">
                    <span className="info-14-24 !text-primary">1653.58</span>
                    <span className="info-14-20 ">≈$ 1653.85</span>
                  </div>
                  <div className="row  bg-white flex justify-between border-b border-border-clr dark:bg-black-v-1">
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                    <h4 className="col info-12  p-3 text-black dark:text-white">
                      {" "}
                      no data
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="xl:grid xl:place-content-center w-full ">
                  <div className="inline-grid">
                    <Image
                      src={"/assets/icons/noData.svg"}
                      alt="No Data"
                      className=""
                      height={200}
                      width={200}
                    />
                    <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                      No Data
                    </h4>
                  </div>
                </div>
              )}
            </div>
          )}
          {active === (mobile ? 2 : 1) && (
            <div className="  w-full  rounded-sm ">
              <div
                className={`head_row justify-between flex gap-4 items-start    `}
              >
                <h4 className=" flex gap-2 items-center head_col p-3  info-12 text-base dark:text-white">
                  Time
                </h4>

                <h4 className=" flex  gap-2  head_col p-3  info-12 text-base dark:text-white">
                  Price(USDT)
                </h4>

                <h4 className=" flex gap-2 items-center head_col p-3  info-12 text-base dark:text-white">
                  Amount(ETH)
                </h4>
              </div>
              {data ? (
                <div className="overflow-y-auto  overscroll-none">
                  {arr &&
                    arr.map((e, i) => {
                      return (
                        <div
                          key={i}
                          className="row  bg-white flex justify-between border-b w-full  border-border-clr dark:bg-black-v-1 "
                        >
                          <h4 className="col info-12  p-3 text-black dark:text-white">
                            {i}
                            no data
                          </h4>
                          <h4 className="col info-12  p-3 text-black dark:text-white">
                            {" "}
                            no data
                          </h4>
                          <h4 className="col info-12  p-3 text-black dark:text-white">
                            {" "}
                            no data
                          </h4>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className="xl:grid xl:place-content-center w-full ">
                  <div className="inline-grid">
                    <Image
                      src={"/assets/icons/noData.svg"}
                      alt="No Data"
                      className=""
                      height={200}
                      width={200}
                    />
                    <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                      No Data
                    </h4>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DetailBox;
