import React from 'react'
import Banner from '@/components/copyTrade/banner'
import TraderPrivilege from '@/components/copyTrade/traderPrivilege'
import FollowerBenefits from '@/components/copyTrade/followerBenefits'
import TradingData from '@/components/copyTrade/tradingData'
import StarTraders from '@/components/copyTrade/starTraders'
import JoinTrader from '@/components/copyTrade/joinTrader'
import Faq from '@/components/copyTrade/faq'


function CopyTrade() {
  return (
    <>
      < Banner/>
      < TraderPrivilege/>
      < FollowerBenefits/>
      <TradingData />
      <StarTraders />
      <JoinTrader />
      <Faq />
    </>
    

  )
}

export default CopyTrade