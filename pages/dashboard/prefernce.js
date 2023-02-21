import Prefernces from 'components/dashboard/prefernces';
import React from 'react'
import Layout from 'components/layout/Layout'

const Prefernce = ({ account }) => {
  return (
    
       <>
            <Layout data={account} >
                <div className=' p-4 grow '>
                    <Prefernces />
                </div>
            </Layout>
        </>
  )
}

export async function getServerSideProps(context) {
    let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
  
    let menu = await data.json();
    return {
      props: {
        account: menu.specialNav.account,
      }, // will be passed to the page component as props
    };
  }


export default Prefernce
