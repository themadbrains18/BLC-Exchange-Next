import Layout from '/components/layout/layout'
import React, { useState } from 'react'
import { getProviders, getSession } from "next-auth/react";

const Withdraw = ({assets}) => {
  const [show, setShow]= useState(1)
  return (
    <>
    <Layout data={assets} name="Withdraw">
<div className='grow p-4 md:p-8'> 
<div className={`flex items-end gap-5 mb-10`}>
              <button
                className={`section-secondary-heading font-noto ${ 
                  show === 1 && "text-disable-clr"
                }`}
                onClick={() => {
                  setShow(1);
                }}
              >
                Trending
              </button>
              <button
                className={`section-secondary-heading font-noto ${
                  show === 2 && "text-disable-clr" 
                }`}
                onClick={() => {
                  setShow(2);
                }}
              >
                Innovation
              </button>
            </div>
</div>
    </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
    const providers = await getProviders();
    if (session) {
      let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
      let menu = await data.json();
      return {
        props: {
          assets: menu.specialNav.assets,
        }, // will be passed to the page component as props
      };
    }
    // return {
    //     props: {
    //         providers,
    //     },
    // }
    return {
      redirect: { destination: "/" },
    };
  }
export default Withdraw