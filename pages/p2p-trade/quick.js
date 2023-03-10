
import SubHeader from 'components/snippets/subHeader';
import React from 'react';
import { getProviders, getSession } from 'next-auth/react'

const Quick = ({ sessions }) => {
  return (
    <>
      <SubHeader sessions={sessions} />
    </>
  )
}

export async function getServerSideProps(context) {
  let session = await getSession(context)

  const paymentods = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment`)
    .then(res => res.json())

  if (session != null) {

    let tokenBalnces = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/post/balances/${session.user.id}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())
    let getPaymet = []
  
    getPaymet = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/payment/get-method/${session.user.id}`)
      .then(res => res.json())
    // selected menu return value
    return {
      props: {
        paymentods: paymentods, // will be passed to the page component as props
        userpaymentods: getPaymet,
        tokenBalnces: tokenBalnces,
        sessions: session
      }
    }
  }
  else {
    return {
      props: {
        paymentods: paymentods, // will be passed to the page component as props
        userpaymentods: [],
        tokenBalnces: [],
        sessions: {}
      }
    }
  }

  // return {
  //   redirect: { destination: '/' },
  // }

}


export default Quick