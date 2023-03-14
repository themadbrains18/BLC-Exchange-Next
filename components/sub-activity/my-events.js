import React from 'react';
import Image from 'next/image';
import coinImage from "../../public/assets/images/daimond.png";
import BitcoinImg from "../../public/assets/images/bitcoin.png";
import endSvg from "../../public/assets/icons/end.svg";


const MyEvents = () => {
  return (
    <section className='dark:bg-black-v-4 py-10 md:py-20 '>
        <div className="container">
            <div className="text-end">
                <div className="relative mb-5 p-[20px] bg-[#fbfbfb] rounded-md dark:bg-transparent inline-block mt-[8px]">
                    <input id="checkbox" name='terms' type="checkbox" className="hidden agree_cta font-noto "  />
                    <label htmlFor="checkbox" className="relative info-14 hover:!text-grey pl-[25px] after:absolute after:top-[2px] after:left-0 after:border after:border-grey after:w-[16px] after:h-[16px] cursor-pointer">My Events</label>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                {/* coin detail */}
                <div className="px-[20px] relative py-[24px] rounded-lg border bg-[#e9e9e975] dark:bg-transparent border-grey duration-300 hover:shadow-lg">
                    <div className='flex items-center gap-[10px]'>
                        <Image src={coinImage} alt="error" width={32} height={32} />
                        <p className='info-14-20'>ETH 50% OFF!</p>
                    </div>
                    <div className='pb-[25px] border-b border-grey '>
                        <h2 className="section-primary-heading text-center my-[20px] !text-grey">50%</h2>
                        <p className="info-14-20 text-center !text-grey">Final Discount</p>
                    </div>
                    <div className="mt-[20px]">
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 dark:!text-white !text-grey">Quantity</p>
                            <p className="info-14-20 dark:!text-[#e3b76d] !text-[#e3b76d]">50ETH</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 dark:!text-white !text-grey">Participants</p>
                            <p className="info-14-20 dark:!text-white !text-grey">2363</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px]'>
                            <p className="info-14-20 dark:!text-white !text-grey">End Time</p>
                            <p className="info-14-20 dark:!text-white !text-grey">2022-09-11 10:00 (UTC)</p>
                        </div>
                    </div>
                    <button className="cta mt-[20px] w-full">Closed</button>
                    <Image src={endSvg} alt="error" width={60} height={60} className="absolute top-[10px] right-[0]" />
                </div>
                {/* coin detail */}
                <div className="px-[20px] py-[24px] relative rounded-lg border bg-[#e9e9e975] dark:bg-transparent border-grey duration-300 hover:shadow-lg">
                    <div className='flex items-center gap-[10px]'>
                        <Image src={BitcoinImg} alt="error" width={32} height={32} />
                        <p className='info-14-20'>BTC 50% OFF!</p>
                    </div>
                    <div className='pb-[25px] border-b border-grey '>
                        <h2 className="section-primary-heading text-center my-[20px] !text-grey">50%</h2>
                        <p className="info-14-20 text-center !text-grey">Final Discount</p>
                    </div>
                    <div className="mt-[20px]">
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 dark:!text-white !text-grey">Quantity</p>
                            <p className="info-14-20 dark:!text-[#e3b76d] !text-[#e3b76d]">50BTC</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 dark:!text-white !text-grey">Participants</p>
                            <p className="info-14-20 dark:!text-white !text-grey">2356</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px]'>
                            <p className="info-14-20 dark:!text-white !text-grey">End Time</p>
                            <p className="info-14-20 dark:!text-white !text-grey">2022-09-11 10:00 (UTC)</p>
                        </div>
                    </div>
                    <button className="cta mt-[20px] w-full">Closed</button>
                    <Image src={endSvg} alt="error" width={60} height={60} className="absolute top-[10px] right-[0]" />
                </div>
            </div>
        </div>
    </section>

  )
}

export default MyEvents;