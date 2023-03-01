import React, { useState } from 'react'
import ActiveCta from '../snippets/activeCta'
import SearchDropdown from '../snippets/search-dropdown';

const Coupon = () => {
  const [active, setActive] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showId, setShowId] = useState(false);
  const [coupon, setCoupon] = useState('All');
  const [couponStatus, setCouponStatus] = useState('All');
  const [rotate, setRotate] = useState(false);
  const [rotate1, setRotate1] = useState(false);
  const selectId = async (item) => {

    setCoupon(item)
  }
  const selectCoupon = async (item) => {
    setCouponStatus(item)

  }

  let activeCta = ["Available Coupons", "Task Cards"];
  const data1 = ['All', 'Coupons', 'Trading Bonus', 'Crypto Vouchers']
  const data2 = ['All', 'Go to use', 'No longer valid', 'Expired', 'To be claimed']
  return (
    <section className="w-full">
      <div>
        <p className='section-secondary-heading'>Coupons Center</p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex gap-36 '>
            <div className='mt-8 cursor-pointer' onClick={()=>{setActive(0)}}>
              <p className='info-14-16'>Available Coupons</p>
              <p className='section-secondary-heading text-primary'>0 <span className='info-14'>coupon(s)</span></p>
            </div>
            <div className='mt-8 cursor-pointer' onClick={()=>{setActive(1)}}>
              <p className='info-14-16'>Task Cards</p>
              <p className='section-secondary-heading text-primary'>0 <span className='info-14'>coupon(s)</span></p>
            </div>
          </div>
          <div className='cursor-pointer hidden sm:block mt-5  lg:mt-0'>
            <img src='/assets/images/coupon.png' alt='coupon' className='max-h-32 h-full'></img>
          </div>
        </div>

        <div className="mt-5   overflow-x-auto table_box border-b border-border-clr">
          <ActiveCta data={activeCta} active={active} setActive={setActive} />
        </div>
        {
          active === 0 &&
          <div className='flex gap-5'>
            <div className='flex flex-col gap-4 mt-6 relative' onClick={(e) => { setShowId(!showId), setRotate(!rotate) }}>
              <label className='info-12'>Coupon type</label>
              <div className='flex border-2 border-border-clr  bg-transparent rounded-lg focus:!border-primary dark:border-white'>
                <input type='text' placeholder='ID Card' autocomplete="off" value={coupon} className=' max-w-fit w-full p-2 info-14 bg-transparent   text-black dark:text-white outline-none ' />
                <img
                  src="/assets/icons/down.svg"
                  className={`${rotate && "rotate-90"} duration-300`}
                ></img>
              </div>
              {showId && <SearchDropdown setShowDropdown={setShowId} idData={data1} selectId={selectId} />}
            </div>
            <div className='flex flex-col gap-4 mt-6 relative' onClick={(e) => { setShowDropdown(!showDropdown), setRotate1(!rotate1) }}>
              <label className='info-12'>Coupon status</label>
              <div className='flex border-2 border-border-clr  rounded-lg focus:!border-primary dark:border-white'>
                <input type='text' placeholder='ID Card' autocomplete="off" value={couponStatus} className=' max-w-fit w-full p-2  info-14  bg-transparent   text-black dark:text-white outline-none ' />
                <img
                  src="/assets/icons/down.svg"
                  className={`${rotate1 && "rotate-90"} duration-300`}
                ></img>
              </div>
              {showDropdown && <SearchDropdown setShowDropdown={setShowDropdown} idData={data2} selectId={selectCoupon} />}
            </div>
          </div>
        }
        {active===1
        &&
        
            <div className='bg-border-clr rounded-lg p-2 mt-6'>
              <p className='info-14'>When tasks are completed, the rewards will be distributed into your “Voucher Center - Available Vouchers”.</p>
            </div>

        }
      </div>
    </section>
  )
}

export default Coupon
