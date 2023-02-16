
import BannerSec from 'components/Proof-of-Reserves/bannerSec'
import OnHandSec from 'components/Proof-of-Reserves/onHandSec'
import Question from 'components/Proof-of-Reserves/question'
import ServicesRatio from 'components/Proof-of-Reserves/servicesRatio'
import React from 'react'

const ProofOfReserves = () => {
  return (
    <>
    <BannerSec/>
    <ServicesRatio/>
    <Question/>
    <OnHandSec/>
    </>
  )
}

export default ProofOfReserves