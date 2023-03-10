import RegisterForm from "@/components/login-register/register-form";
import Head from 'next/head';
import { getProviders, getSession } from "next-auth/react"


const Register = () => {

  return (
    
   <>
    <Head>
        <title>Register</title>
    </Head>
    <RegisterForm  />
   </>
  )
}

export default Register;


export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders()
  if (session) {
    return {
      redirect: { destination: "/dashboard" },
    };
    // return {
    //   props: {
    //   }, // will be passed to the page component as props
    // };
  }
  return {
      props: {
          providers,
      },
  }
 

}