import Announcements from '@/components/dashboard/announcements'
import Assets from '@/components/dashboard/assets'
import Explore from '@/components/dashboard/explore'
import Profile from '@/components/dashboard/profile'
import Referral from '@/components/dashboard/referral'
import SocialTrades from '@/components/dashboard/socialTrades'
import Tranding from '@/components/dashboard/tranding'
import Welfare from '@/components/dashboard/welfare'
import SideMenu from '@/components/snippets/sideMenu'
import React from 'react'

const Dashboard = () => {
  return (
    <>
     <div className="flex pt-40">
      <div className='max-w-xs w-full'></div>
        <div className='grow max-w-full px-10'>
          <div>
          <Profile />
          </div>
           <div className='flex w-full '>
            <div className=' w-full'>
            <Assets />
            <SocialTrades />
            <Tranding />
            <Explore />
            </div>
            <div className='hidden xl:block max-w-xs w-full '>
              <Welfare />

              <Referral />
              <Announcements />
           </div>
           
           </div> 
        </div>
      

        </div> 
    </>
  )
}

export default Dashboard
