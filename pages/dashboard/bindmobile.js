import Layout from '@/components/layout/layout'
import ModifyPass from './../../components/dashboard/modify-pass';
import LinkMobile from "../../components/dashboard/link-mobile";
const Bindmobile = ({account})=>{
    return(
        <Layout data={account} slug="dashboard">
            <LinkMobile />
        </Layout>
    )
}
export async function getServerSideProps(context) {
    let data = await fetch("http://localhost:3000/api/hello");
  
    let menu = await data.json();
    return { 
      props: {
        account: menu.specialNav.account,
      }, // will be passed to the page component as props
    };
  }

export default Bindmobile;