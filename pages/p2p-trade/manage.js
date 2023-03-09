import SubHeader from '/components/snippets/subHeader';
import { getProviders, getSession } from 'next-auth/react'
import P2PManagement from './../../components/oneClickBuy/p2p-management';
const Manage = ({tokenBalnces,sessions, paymentods, userpaymentods }) => {
    return (
        <>
            <P2PManagement tokenBalnces={tokenBalnces} session={sessions} paymentods={paymentods} userpaymentods={userpaymentods}  />
        </>
    )
}
export default Manage;





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
  

