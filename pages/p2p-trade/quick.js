
import SubHeader from 'components/snippets/subHeader';
import React from 'react';
import { getProviders, getSession } from 'next-auth/react'

const Quick = ({paymentods}) => {
  return (
    <>
      <SubHeader paymentods={paymentods} />
    </>
  )
}

export async function getServerSideProps(context) {
  let session = await getSession(context)
  if(session != null){

  let tokenBalnces = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/post/balances/${session.user.id}`,
    {
      method: 'GET',
    },
  ).then((response) => response.json())

    const paymentods = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment`)
    .then(res => res.json())

    let getPaymet = []

    getPaymet = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/payment/get-method/${session.user.id}`) 
  .then(res => res.json())



   // selected menu return value 

    
    return {
       props : {
           paymentods: paymentods, // will be passed to the page component as props
           userpaymentods : getPaymet,
           tokenBalnces: tokenBalnces,
           sessions: session
        }
    }
  } 

    return {
      redirect: { destination: '/' },
    }
    
  } 
  

export default Quick