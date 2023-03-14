import Prefernces from 'components/dashboard/prefernces';
import React from 'react'
import Layout from '@/components/layout/Layout'
import { getProviders, getSession } from "next-auth/react"


const Prefernce = ({ account,sessions, lastLogin }) => {
  return (
    
       <>
            <Layout data={account} name="Prefernce" >
                <div className='p-4 md:p-8 grow '>
                    <Prefernces sessions={sessions.user} lastLogin={lastLogin} />
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
        sessions: session,
        lastLogin : session.lastlogin
      },
    };
  }
  return {
    redirect: { destination: "/" },
  };
  }


export default Prefernce
