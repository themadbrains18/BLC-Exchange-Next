import VerificationType from 'components/verified/verificationType'
import React from 'react'
import Layout from 'components/layout/Layout'

const Verified = ({ account }) => {
    return (
        <>
            <Layout data={account} >
                <div className=' p-4 grow '>
                    <VerificationType />
                </div>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    let data = await fetch(process.env.BASEURL + "/hello");
  
    let menu = await data.json();
    return {
      props: {
        account: menu.specialNav.account,
      }, // will be passed to the page component as props
    };
  }

export default Verified
