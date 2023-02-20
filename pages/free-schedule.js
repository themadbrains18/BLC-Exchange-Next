import React from 'react'
import Head from 'next/head';
import Hero from '../components/free-schedule/hero';
import TabsSec from '../components/free-schedule/tabs-sec';
const FeeSchedule = () => {
  return (
    <>
      <Head>
          <title>Free Schedule</title>
      </Head>
      <Hero />
      <TabsSec />
    </>
  )
}

export default FeeSchedule;