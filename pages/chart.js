import Header from "/components/chart/header";
import React, { useState, useEffect } from "react";

import SearchBox from "/components/chart/searchBox";
import Desktop from "/components/chart/desktop";
import Mobile from "/components/chart/mobile";
import ActiveCta from "/components/snippets/activeCta";
import ChartDataTable from "/components/chart/chartDataTable";

const Chart = () => {
  let ctas = ["Open Orders", "Order History"];
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(1025);
  useEffect(() => {
    let innerWidth = window.innerWidth;
    setWidth(innerWidth);

    window.addEventListener("resize", () => {
      let innerWidth = window.innerWidth;
      setWidth(innerWidth);
    });
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={` bg-black  opacity-0 invisible  duration-300 fixed top-0 left-0  w-full ${
          open && "!visible opacity-50 z-[2]"
        }`}
      ></div>
      <Header setOpen={setOpen} open={open} />

      <div className="flex ">
        <SearchBox open={open} setOpen={setOpen} />
        {width < 1024 ? <Mobile /> : <Desktop />}
      </div>
      <div>
        <div className="dark:bg-black-v-3">
          <div className="p-8">
            <ActiveCta data={ctas} active={active} setActive={setActive} />

            <ChartDataTable data={data}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
