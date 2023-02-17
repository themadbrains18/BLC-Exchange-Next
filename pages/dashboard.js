import Assets from '@/components/dashboard/assets'
import Profile from '@/components/dashboard/profile'
import SocialTrades from '@/components/dashboard/socialTrades'
import SideMenu from '@/components/snippets/sideMenu'
import React from 'react'

const Dashboard = () => {
  return (
    <>
     <div className="flex pt-40">
      <div className='max-w-xs w-full'></div>
        <div className='grow'>
            <Profile />
            <Assets />
            <SocialTrades />
        </div>
      <div className='max-w-xs w-full'></div>

        </div> 
    </>
  )
}

export default Dashboard
