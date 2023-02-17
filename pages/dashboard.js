import Profile from '@/components/dashboard/profile'
import SideMenu from '@/components/snippets/sideMenu'
import React from 'react'

const Dashboard = () => {
  return (
    <>
     <div className="flex pt-40">
      <div className='max-w-xs w-full'></div>
        <div>
            <Profile />
        </div>
        </div> 
    </>
  )
}

export default Dashboard
