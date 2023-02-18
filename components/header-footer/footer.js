import {useState,useEffect, Fragment} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavAccordian from '../snippets/navAccordian';

// import social media icons
import facebook from '../../public/assets/images/facebook.png';
import discord from '../../public/assets/images/discord.png';
import intsgram from '../../public/assets/images/intsgram.png';
import linkdin from '../../public/assets/images/linkdin.png';
import multilang from '../../public/assets/images/multi-lang.png';
import reddit from '../../public/assets/images/reddit.png';
import telegram from '../../public/assets/images/telegram.png';
import telfuture from '../../public/assets/images/tel-future.png';
import tiktok from '../../public/assets/images/tiktok.png';
import twitter from '../../public/assets/images/twitter.png';
import youtube from '../../public/assets/images/youtube.png';


const Footer = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("/api/hello")
        .then((res) => res.json())
        .then((data) => {
          setData(data.footerNav);
          /* process your data further */
        })
        .catch((error) => console.error(error));
    })().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <footer className='dark:bg-black-v-4 py-14 '>
        <div className="container">
            <div className="flex flex-wrap gap-3 justify-between">
                <div className="max-w-full lg:max-w-[72%] w-full grid gap-0 sm:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                    <div className='mb-8 sm:mb-0 block lg:hidden sm:col-start-1 sm:col-span-4'>
                        <Image src="/assets/images/BLC-Exchange.png" alt='error' width="40" height="40" />
                    </div>


                    {Data.length > 0 && 
                        Data.map((e, i) => {
                            return (
                                <Fragment key={i}>
                                    <div  className='mb-4 sm:mb-0 sm:hidden'>
                                        <NavAccordian content={e.content}  heading={e.mainHeading} />
                                    </div>
                                    <div  className='mb-4 sm:mb-0 hidden sm:block'>
                                        <h4 className='info-14-20 sm:mb-6 flex align-center justify-between'>
                                            <span>{e.mainHeading}</span>
                                        </h4>
                                        <ul> 
                                            {e.content && e.content.map((elem,index)=>{ 
                                                return(
                                                    
                                                    <li key={index} className='mb-5 last:mb-0'>
                                                        <Link href={elem.linkUrl} className='info-14 '>{elem.linkText}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Fragment>
                            );
                        })
                    }

                </div>
                <div className=" max-w-full lg:max-w-[22%] w-full">
                    <div>
                        <Image src="/assets/images/BLC-Exchange.png" alt='error' width="100" height="50" className='hidden lg:block' />
                    </div>
                    <div className='my-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:block'>
                        <div className="mb-4">
                            <p className='info-14-16'>Support Service</p>
                            <Link href="mailto:support@b.com" className='info-14'>support@blcexchange.net</Link>
                        </div>
                        <div className="mb-4">
                            <p className='info-14-16'>Business Opportunity</p>
                            <Link href="mailto:BD@blcexchange.net" className='info-14'>BD@blcexchange.net</Link>
                        </div>
                        <div className="mb-4">
                            <p className='info-14-16'>Trading Quant & MM</p>
                            <Link href="mailto:institution@blcexchange.net" className='info-14'>institution@blcexchange.net</Link>
                        </div>
                        <div className="mb-4">
                            <p className='info-14-16'>VIP Services</p>
                            <Link href="mailto:vip@blcexchange.net" className='info-14'>vip@blcexchange.net</Link>
                        </div>
                    </div>
                    <div className='grid gap-5 grid-cols-5 sm:grid-cols-11 lg:grid-cols-5 max-w-full lg:max-w-[85%] mt-10'>
                        <Link href="#">
                            <Image src={twitter} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={facebook} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={discord} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={intsgram} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={linkdin} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={multilang} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={reddit} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={telegram} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={telfuture} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={tiktok} alt="error" width={24} height={24} />
                        </Link>
                        <Link href="#">
                            <Image src={youtube} alt="error" width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex items-start gap-5 mt-8  max-w-full flex-wrap md:flex-nowrap">
                <p className="info-14 hover:text-grey max-w-full md:max-w-[25%] w-full">© Copyright blcexchange.net</p>
                <p className="info-14 hover:text-grey max-w-full md:max-w-[75%] w-full">
                    BLC-Exchange is a trading platform for crypto products. Trading in cryptocurrency derivatives involves huge risks. Please consider carefully whether BLC-Exchange is suitable for you to use. For details, please check our <Link href="#" className="underline hover:text-primary-hover">Terms of Use</Link>, <Link className="underline hover:text-primary-hover" href="#">Risk Disclosure </Link> and <Link className="underline hover:text-primary-hover" href="#"> Privacy Policy</Link>.
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer;