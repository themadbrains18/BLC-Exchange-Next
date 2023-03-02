import Announcements from 'components/dashboard/announcements'
import Assets from 'components/dashboard/assets'
import Explore from 'components/dashboard/explore'
import Profile from 'components/dashboard/profile'
import Referral from 'components/dashboard/referral'
import SocialTrades from 'components/dashboard/socialTrades'
import Tranding from 'components/dashboard/tranding'
import Welfare from 'components/dashboard/welfare'
import Layout from '@/components/layout/Layout'
import { getProviders, getSession } from "next-auth/react"

import React from 'react'
const Dashboard = ({ account, sessions }) => {
// console.log(sessions,'================sessions dashboard')
  return (
    <>
      <Layout data={account} link="dashboard">
        <div className='grow max-w-full p-4 md:p-8 bg-white dark:bg-black-v-5'>
          <div>
            <Profile sessions={sessions.user}/>
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
              <Referral sessions={sessions.user} />
              <Announcements />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders()
  if (session) {
    let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
    let menu = await data.json();
    return {
      props: {
        account: menu.specialNav.account,
        sessions: session
      },
    };
  }
  return {
    redirect: { destination: "/" },
  };


}
export default Dashboard
