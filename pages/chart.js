import Header from "/components/chart/header";
import React, { useState } from "react";
import Graph from "/components/chart/graph";
import SearchBox from "/components/chart/searchBox";
import DetailBox from "/components/chart/detailBox";

const Chart = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={` bg-black  opacity-0 invisible duration-300 fixed top-0 left-0 h-full w-full ${
          open && "!visible opacity-50 z-[2]"
        }`}
      ></div>
      <Header setOpen={setOpen} open={open} />
      <div className="flex ">
        <SearchBox open={open} setOpen={setOpen} />
        <div className="grow">
          <Graph />
        </div>
        <div>
          <DetailBox />
        </div>
      </div>
    </>
  );
};

export default Chart;
