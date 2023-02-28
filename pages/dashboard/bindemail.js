import Layout from '@/components/layout/Layout'
import LinkEmail from "../../components/dashboard/link-email";
import { getProviders, getSession } from "next-auth/react"
const Bindmobile = ({ account,sessions }) => {
  return (
    <Layout data={account} slug="dashboard">
      <LinkEmail sessions={sessions}/>
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
      },
    };
  }
  return {
    redirect: { destination: "/" },
  };
  
}

export default Bindmobile;