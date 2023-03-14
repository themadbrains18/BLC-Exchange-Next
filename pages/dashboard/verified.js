import VerificationType from 'components/verified/verificationType'
import React from 'react'
import Layout from '@/components/layout/Layout'
import { getProviders, getSession } from "next-auth/react"
const Verified = ({ account, sessions, kycList }) => {
    return (
        <>
            <Layout data={account} name="ID Verification" verify_cta={true} >
              
           
                <div className='p-4 md:p-8 grow '>
                    <VerificationType session={sessions.user} kycList={kycList}/>
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
    let kycList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/kyc/${session?.user?.id}`, {
      method: "GET"
    }).then(response => response.json());
 
    let menu = await data.json();
    return {
      props: {
        account: menu.specialNav.account,
        kycList:kycList,
        sessions: session
      },
    };
  }
  return {
    redirect: { destination: "/" },
  };


}

export default Verified
