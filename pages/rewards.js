import Banner from '@/components/rewards/banner'
import LuckyDraw from '@/components/rewards/lucky-draw'
import UserTask from '@/components/rewards/user-task'
import UserGuide from '@/components/rewards/user-guide'

import React from 'react'


const Rewards = () => {
    return (
        <>
            <Banner />
            <UserTask />
            <LuckyDraw />
           <UserGuide />
        </>
    )
}

export default Rewards