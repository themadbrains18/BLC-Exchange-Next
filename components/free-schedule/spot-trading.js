import React from 'react'

const SpotTrading = () => {
  return (
    <>
        <table width="100%">
            <thead>
                <tr className='text-center bg-[#e7e7e7] dark:bg-[#e7e7e71a]'>
                    <th className='py-[16px] text-black dark:text-white font-medium font-noto-displa text-[14px]'>Trading Pair</th>
                    <th className='py-[16px] text-black dark:text-white font-medium font-noto-displa text-[14px]'>Maker</th>
                    <th className='py-[16px] text-black dark:text-white font-medium font-noto-displa text-[14px]'>Taker</th>
                    <th className='py-[16px] text-black dark:text-white font-medium font-noto-displa text-[14px]'>Maker (Pay with BGB)</th>
                    <th className='py-[16px] text-black dark:text-white font-medium font-noto-displa text-[14px]'>Taker (Pay with BGB)</th>
                </tr>
            </thead>
        <tbody>
            <tr className='text-center'>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>LINK/USDT</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
            </tr>

            <tr className='text-center'>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>UNI/USDT</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
            </tr>

            <tr className='text-center'>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>SUSHI/USDT</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
            </tr>
            <tr className='text-center'>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>COMP/USDT</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.1%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
                <td className='py-[16px] dark:text-[#bababa] font-normal font-noto-displa text-[14px]'>0.08%</td>
            </tr>
        </tbody>
        </table>

    </>
  )
}

export default SpotTrading;