import SubHeader from '/components/snippets/subHeader';
import { getProviders, getSession } from 'next-auth/react'
import P2PManagement from './../../components/oneClickBuy/p2p-management';
const Manage = ({tokenBalnces,sessions }) => {
    return (
        <>
            <P2PManagement tokenBalnces={tokenBalnces} session={sessions}/>
        </>
    )
}
export async function getServerSideProps(context) {
    const { req } = context
    const session = await getSession({ req })
    const providers = await getProviders()
  
    if (session) {
      // =================== get menus add header/foooter links ================== //
   
  
      // =============== get token balances by user id ============ //
  
      let tokenBalnces = await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/post/balances/${session.user.id}`,
        {
          method: 'GET',
        },
      ).then((response) => response.json())
  


      return {
        props: {
          tokenBalnces: tokenBalnces,
          sessions: session
        }, // will be passed to the page component as props
      }
    }
    // return {
    //     props: {
    //         providers,
    //     },
    // }
    return {
      redirect: { destination: '/' },
    }
  }
export default Manage;