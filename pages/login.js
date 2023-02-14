import React from 'react'
import Head from 'next/head';
import LoginForm from '@/components/login/login-form';
const Login = () => {
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