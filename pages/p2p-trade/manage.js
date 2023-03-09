import SubHeader from '/components/snippets/subHeader';
import P2PManagement from './../../components/oneClickBuy/p2p-management';

import { getSession } from "next-auth/react"



const Manage = ({paymentods, userpaymentods}) => {
    return (
        <>
            <P2PManagement paymentods={paymentods} userpaymentods={userpaymentods} />
        </>
    )
}

export default Manage;

export async function getServerSideProps(context) {
    

    const paymentods = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment`)
    .then(res => res.json())

   
    let getPaymet = []
    let session = await getSession(context)

    if(session != null){
         getPaymet = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/payment/get-method/${session.user.id}`) 
        .then(res => res.json())
    }



   // selected menu return value 

    
    return {
       props : {
           paymentods: paymentods, // will be passed to the page component as props
           userpaymentods : getPaymet
        }
    }
  } 