import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "/components/home/hero";
import Aizone from "/components/home/ai-zone";
import Trustworthy from "/components/home/trustworthy";
import Tutorials from "/components/home/tutorials";
import Sponsor from "/components/home/sponsor";
import FlowSliderSec from "/components/home/flowSliderSec";
import Trending from "/components/home/trending";
import Download from "/components/home/download";

// const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
    
      <Head>
        <title>BLC-Exchange</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      {/* top bar */}
      <Hero /> 
      <FlowSliderSec />
      <Aizone />
      <Trending />
      <Trustworthy />
      <Download /> 
      <Tutorials />
      <Sponsor />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: { name: "prince" }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {
//   let nav = await fetch(process.env.NEXT_PUBLIC_BASEURL+ "/hello")
//   .then(res => res.json())
//   .then((data) => {
//     console.log(data)
//     /* process your data further */
// })
// .catch((error) => console.error(error));
//   return {
//     props: {
//       menus : ''
//     }, // will be passed to the page component as props
//   }
// }
