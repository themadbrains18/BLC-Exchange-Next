import { useState } from "react";
import ActiveCta from "/components/snippets/activeCta";
import BuySellCard from "../snippets/buySellCard";

const BuySellDoge = () => {
  const [active, setActive] = useState(0);
  let ctas = ["Limits", "Trigger Orders"];
  let selectMenu = ["Limit Order", "Market Order"];
  return (
    <>
      <ActiveCta
        type="second"
        data={ctas}
        active={active}
        setActive={setActive}
      />
      <div className="mt-4  flex gap-10">
       <BuySellCard menu={selectMenu}/>
       <BuySellCard menu={selectMenu} sell={true}/>
      </div>
    </>
  );
};

export default BuySellDoge;
