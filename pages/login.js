import React from 'react'
import Head from 'next/head';
import LoginForm from '@/components/login-register/login-form';
import { getProviders, getSession } from "next-auth/react"

const Login = ({providers}) => {
  return (
    <>
        <Head>
            <title>Login</title>
        </Head>
        <LoginForm />
    </>
  )
}

export default Login;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders()
  if (session) {
      return {
          redirect: { destination: "/" },
      };
  }
  return {
      props: {
          providers,
      },
  }
}
