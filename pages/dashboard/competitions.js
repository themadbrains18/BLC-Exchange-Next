import React from 'react'
import Layout from '@/components/layout/Layout'
import Competiton from 'components/dashboard/competiton';

const Competitions = ({ account }) => {
  return (
    <>
            <Layout data={account} name="Competitions">
                <div className='p-4 md:p-8 grow '>
                 <Competiton />
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


export default Competitions
