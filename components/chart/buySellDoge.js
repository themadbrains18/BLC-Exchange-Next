import { useState } from "react";
import ActiveCta from "components/snippets/activeCta";
import BuySellCard from "../snippets/buySellCard";

const BuySellDoge = ({ symbol, assets }) => {

  const [active, setActive] = useState(0);
  let ctas = ["Limit Order", "Market Order"];
  let selectMenu = ["Limit Order", "Market Order"];

  let usdtAssets = [];
  let tokenAssets = [];
  if (assets !== undefined) {
    usdtAssets = assets.filter((item) => {
      return item.symbol === 'USDT' && item.walletType === "main_wallet"
    })

    tokenAssets = assets.filter((item) => {
      return item.symbol === symbol && item.walletType === "main_wallet"
    })
  }


  return (
    <>
      <ActiveCta
        type="second"
        data={ctas}
        active={active}
        setActive={setActive}
      />
      <div className="mt-4  flex gap-10">
        <BuySellCard menu={selectMenu} active={active}
          setActive={setActive} symbol={symbol} usdtBal={usdtAssets.length > 0 ? usdtAssets[0].balance : 0} tokenBal={tokenAssets.length > 0 ? tokenAssets[0].balance : 0} />

        <BuySellCard menu={selectMenu} sell={true} active={active}
          setActive={setActive} symbol={symbol} usdtBal={usdtAssets.length > 0 ? usdtAssets[0].balance : 0} tokenBal={tokenAssets.length > 0 ? tokenAssets[0].balance : 0} />
      </div>
    </>
  );
};

export default BuySellDoge;
