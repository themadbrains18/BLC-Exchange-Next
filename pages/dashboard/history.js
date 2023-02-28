import {useState,useContext} from 'react';
import { getProviders, getSession } from "next-auth/react";
import Layout from 'components/layout/Layout';
import HistoryTable from '../../components/dashboard/login-history-table';
import SecurityHistoryTable from '../../components/dashboard/security-history-table';
import ActiveCta from "../../components/snippets/activeCta";
import Link from "next/link";
import Context from '/components/contexts/context';


const History = ({ account,sessions }) => {
    let CtaName = ["Login History","Security History"]
    const [active,setActive] = useState(0);
    const { mode } = useContext(Context);
    return(
        <Layout data={account} slug="dashboard">
          <div className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full sm:py-[40px] px-[20px] py-10">
          <h4 className='section-secondary-heading flex items-center gap-4 flex-row-reverse justify-end mb-[30px]'>
              <span>Account Activity</span>
              <Link href="setting">
                  <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"  fillRule="evenodd" />
                  </svg>
              </Link>
          </h4>
          <p className='info-12 mb-[10px]'>Your login / security history is stored for up to 3 months</p>
            <ActiveCta data={CtaName} active={active} setActive={setActive}/>
            {
                active === 0 &&
                <HistoryTable />
            }
            {
                active === 1 &&
                <SecurityHistoryTable />
            }
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
    return {
      redirect: { destination: "/" },
    };
  
  }
export default History;