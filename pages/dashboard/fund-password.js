
import { getProviders, getSession } from "next-auth/react";
import Layout from '/components/layout/layout'
import FundPassWordCom from '../../components/dashboard/fundpass';
import ChangeFundCode from '../../components/dashboard/change-fund-code';

const FundPassWord = ({account,sessions }) => {
    return(
        <Layout data={account} slug="dashboard">
          <div>
            <FundPassWordCom session={sessions.user}/>
          </div>
        </Layout>
    )
}
export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
    const providers = await getProviders()
    if (session) {
      let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
      let menu = await data.json();
      return {
        props: {
          account: menu.specialNav.account,
          sessions: session
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
  
export default FundPassWord;