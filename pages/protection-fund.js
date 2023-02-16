import Banner from 'components/protectionFund/banner'
import FundValue from 'components/protectionFund/fundValue'
import ProtectAssets from 'components/protectionFund/protectAssets'
import StartTrade from 'components/protectionFund/startTrade'
import WhyNeed from 'components/protectionFund/whyNeed'
import React from 'react'

const protectionFund = () => {
  return (
    <>
    <Banner />
    <FundValue />
    <WhyNeed />
    <ProtectAssets />
    <StartTrade />
    </>
  )
}

export default protectionFund
