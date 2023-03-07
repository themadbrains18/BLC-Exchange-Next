import Graph from "components/chart/graph";
import DetailBox from "components/chart/detailBox";
import BuySellDoge from "./buySellDoge";
import { useContext } from "react";
import Context from "/components/contexts/context";

const Desktop = ({symbol, assets}) => {
  const { mode } = useContext(Context);
  return (
    <>
      <div className={`grow hidden lg:block dark:bg-black-v-3 border-4 border-t-0 ${mode === 'dark' ? 'border-black' : 'border-gray-200'}`}>
        <Graph symbol={symbol}/>
        <div className={`p-8  border-t-4 ${mode === 'dark' ? 'border-black' : 'border-gray-200'}`} >
          <BuySellDoge symbol={symbol} assets={assets}/>
        </div>
      </div>
      <div>
        <DetailBox />
      </div>
    </>
  );
};

export default Desktop;
