import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from '@/components/home/hero';
import Aizone from '@/components/home/ai-zone';
import Tutorials from '@/components/home/tutorials';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Aizone />
        <Tutorials />
      </main>
    </>
  )
}



// export async function getServerSideProps(context) {
//   let nav = await fetch('http://localhost:3000/api/hello')
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
  