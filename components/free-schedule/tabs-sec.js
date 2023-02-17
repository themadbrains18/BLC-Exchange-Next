import React from 'react'
import Link from "next/link";
import SpotTrading from './spot-trading';

const TabsSec = () => {
  return (
    <section className="py-[80px] dark:bg-black-v-5 ">
        <div className="container">
            {/* tabs Cta */}
            <div className='flex items-center gap-5 justify-between mb-10'>
                <div className="flex items-center gap-5">
                    <button className={`section-secondary-heading md:!text-[28px]`}>Spot Trading</button>
                    <button className={`section-secondary-heading md:!text-[28px]`}>Futures Trading</button>
                    <button className={`section-secondary-heading md:!text-[28px]`}>Withdrawals</button>
                </div>
                <div>
                    <Link href="#" className="info-14 !text-primary">Start Trading</Link>
                </div>
            </div>
            {/* tabs Content */}
            <div>
                <SpotTrading />
            </div>
        </div>
    </section>
  )
}

export default TabsSec;