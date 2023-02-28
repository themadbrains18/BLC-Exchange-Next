import Layout from '@/components/layout/Layout'
import ModifyPass from './../../components/dashboard/modify-pass';
import { getProviders, getSession } from "next-auth/react"
const Pwd = ({account , sessions}) => {
  return (
    <Layout data={account} slug="dashboard">
        <div>
            <ModifyPass session={sessions.user}/>
        </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {

  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders()
  if (session) {
    let data = await fetch("http://localhost:3000/api/hello");
  
    let menu = await data.json();
    return { 
      props: {
        account: menu.specialNav.account,
        sessions : session
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
export default Pwd;