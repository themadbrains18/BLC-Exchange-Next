import React from 'react'
import Image from 'next/image';
import cardImage from "../../public/assets/images/card-img-new.png";
const InsightCard = () => {
  return (
    <div className="py-[24px]">
       <div className="flex items-center justify-between mb-[30px]">
          <div className='flex gap-3 items-center'>
              <Image src={cardImage} alt="" width={32} height={32} />
              <p className='info-14-16'>BLC-Exchange Branding</p>
          </div>
          <button className="cta">Follow</button>
       </div>
       <p className='info-14-16 !text-grey mb-2'>Bitcoin Price Prediction</p>
       <p className='info-12 mb-4 clamped dark:text-white'>ETH price losses key demand zone of $1,200 againPrice remains weak as bears battle bulls; so much uncertainty in the market ETH price gets rejected from a low of $1,220 on the high timeframe The price of Ethereum (ETH) trading below $1,200 continues as the price faced rejection, breaking and trending higher to a region of $1,300 after showing from price action bouncing off from its weekly low of $1,080. In the high timeframe, the price of Ethereum (ETH) looks weak, with a probable result of a downtrend movement compared to an upside. Despite the relief bounce and uncertainty surrounding the crypto market, the FTX fiasco continues to act as a catalyst for the market to bottom out.</p>
       <p className='text-14 !text-primary'>View More</p>
    </div>
  )
}

export default InsightCard;