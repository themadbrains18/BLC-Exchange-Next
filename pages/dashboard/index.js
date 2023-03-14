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


const Dashboard = ({ account, sessions, lastLogin,overview, coins }) => {
  return (
    <>
      <Layout data={account} name="dashboard">
        <div className='grow max-w-full p-4 md:p-8 bg-white dark:bg-black-v-5'>
          <div>
            <Profile sessions={sessions.user} lastLogin={lastLogin}/>
          </div>
          <div className='flex w-full gap-8'>
            <div className=' w-full'>
              <Assets overview={overview} />
              <SocialTrades />
              <Tranding coins={coins}/>
              <Explore />
              <div className="md:hidden mt-[-40px]">
                <Referral sessions={sessions.user} />
              </div>

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
    let assetOverview = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/assets/overview/${session?.user?.id}/USDT`,{
      method :"GET"
    }).then(response => response.json());
    let tokenList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/token/marketcoin`, {
      method: "GET"
    }).then(response => response.json());
  
    let menu = await data.json();
    return {
      props: {
        account: menu.specialNav.account,
        sessions: session,
        lastLogin : session.lastlogin,
        overview : assetOverview.data,
        coins: tokenList.data.data,
      },
    };
  }
  return {
    redirect: { destination: "/" },
  };

}
export default Dashboard
