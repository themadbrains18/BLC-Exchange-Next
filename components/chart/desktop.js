import Graph from "/components/chart/graph";
import DetailBox from "/components/chart/detailBox";
import BuySellDoge from "./buySellDoge";

const Desktop = () => {
 
  return (
    <>
      <div className="grow hidden lg:block dark:bg-black-v-3  border-4 border-t-0 border-primary-hover">
        <Graph />
        <div className="p-8  border-t-4 border-primary-hover">
       <BuySellDoge/>
       </div>
      </div>
      <div>
        <DetailBox />
      </div>
    </>
  );
};

export default Desktop;
