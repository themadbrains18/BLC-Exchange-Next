import Image from "next/image"
const Myordertable = () => {
    return (
        <>
        {/* this is showing only desktop */}
          <table width="100%" className="hidden lg:inline-table">
            <thead>
                <tr>
                    <th className='p-[6px] xl:p-[10px] text-black !text-start dark:text-white font-medium font-noto text-[14px]'>Type/Time</th>
                    <th className='p-[6px] xl:p-[10px] text-black !text-start dark:text-white font-medium font-noto text-[14px]'>Total amount/Price</th>
                    <th className='p-[6px] xl:p-[10px] text-black !text-start dark:text-white font-medium font-noto text-[14px]'>Amount</th>
                    <th className='p-[6px] xl:p-[10px] text-black !text-start dark:text-white font-medium font-noto text-[14px]'>Counterparty</th>
                    <th className='p-[6px] xl:p-[10px] text-black !text-start dark:text-white font-medium font-noto text-[14px]'>Order number</th>
                    <th className='p-[6px] xl:p-[10px] text-black !text-start dark:text-white font-medium font-noto text-[14px]'>Status/Operation</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td className='p-[6px] xl:p-[10px] dark:text-[#bababa] font-normal font-noto text-[14px]'>
                    <div className="flex gap-[6px]  items-center">
                      <div>
                        <Image src="https://bitlivecoinnetwork.com/images/logo.png" alt="error" width={24} height={24} />
                      </div>
                      <div>
                        <p className="info-12 dark:!text-white !text-black">Buy USDT</p>
                        <p className="info-12">2023-03-13 14:58:15</p>
                      </div>
                    </div>
                  </td>
                  <td className='p-[6px] xl:p-[10px] dark:text-[#bababa] font-normal font-noto text-[14px]'>
                    <div className="flex gap-[6px] items-center justify-between mb-[6px]">
                      <p className="info-12 dark:!text-white !text-black">Total a mount </p>
                      <p className="info-12">800 INR</p>   
                    </div> 
                    <div className="flex gap-[6px] items-center justify-between">
                      <p className="info-12 dark:!text-white !text-black">Price</p>
                      <p className="info-12">82.11 INR</p>  
                    </div>
                  </td>
                  <td className='p-[6px] xl:p-[10px] dark:text-[#bababa] font-normal font-noto text-[14px]'>
                    <p className="info-12">9.74302765 USDT</p>
                  </td>
                  <td className='p-[6px] xl:p-[10px] dark:text-[#bababa] font-normal font-noto text-[14px]'>
                    <p className="info-12">sss1123</p>
                  </td>
                  <td className='p-[6px] xl:p-[10px] dark:text-[#bababa] font-normal font-noto text-[14px]'>
                    <p className="info-12">101910...3280</p>
                  </td>
                  <td className='p-[6px] xl:p-[10px] dark:text-[#bababa] font-normal font-noto text-[14px]'>
                    <p className="info-12 dark:!text-white !text-black cursor-pointer flex gap-[30px] items-center">
                        <span>Computed </span>
                      
                        <Image
                        src="/assets/icons/down.svg"
                        height={20}
                        width={14}
                        alt=""
                        className="block duration-300"
                      />
                    </p>
                  </td>
              </tr>
            </tbody>
          </table>
        {/* this is showing only desktop */}

        {/* this is showing only Mobile */}
          <div className="lg:hidden  divide-y">
            <div className="py-[15px]">
            <div className="flex items-center gap-[10px] justify-between">
              <p className="info-12 dark:!text-white !text-black">Buy USDT</p>
              <p className="info-12">2023-03-13 14:58:15</p>
            </div>
            <div className="flex items-center gap-[10px] justify-between mt-[15px]">
              <p className="info-12 dark:!text-white !text-black">Amount</p>
              <p className="info-12">2023-03-13 14:58:15</p>
            </div>
            <div className="flex items-center gap-[10px] justify-between mt-[15px]">
              <p className="info-12 dark:!text-white !text-black">Total amount</p>
              <p className="info-12">800 INR</p>
            </div>
            <div className="flex items-center gap-[10px] justify-between mt-[15px]">
              <p className="info-12 dark:!text-white !text-black">Counterparty</p>
              <p className="info-12"> sss1123</p>
            </div>
            <div className="flex items-center gap-[10px] justify-between mt-[15px]">
              <p className="info-12 dark:!text-white !text-black">Payment methods</p>
              <p className="info-12"> Paytm</p>
            </div>
            <div className="flex items-center gap-[10px] justify-between mt-[15px]">
              <p className="info-12 dark:!text-white !text-black">Time</p>
              <p className="info-12">2023-03-13 14:58:15</p>
            </div>
            </div>
          </div>
        {/* this is showing only Mobile */}
        </>
    )
}
export default Myordertable;