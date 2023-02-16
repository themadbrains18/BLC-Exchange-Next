
import BannerSec from '@/components/proof-of-reserves/bannerSec'
import OnHandSec from '@/components/proof-of-reserves/onHandSec'
import Question from '@/components/proof-of-reserves/question'
import ServicesRatio from '@/components/proof-of-reserves/servicesRatio'
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