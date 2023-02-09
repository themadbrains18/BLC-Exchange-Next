import {useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavAccordian from '../snippets/navAccordian';
const Footer = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3000/api/hello")
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
    <footer className=' py-14 '>
        <div className="container">
            <div className="flex flex-wrap gap-3 justify-between">
                <div className="max-w-full lg:max-w-[72%] w-full grid gap-0 sm:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                   
                    {Data.length > 0 && 
                        Data.map((e, i) => {
                            return (
                                <div key={i} className='mb-4 sm:mb-0'>
                                    <NavAccordian content={e.content}  heading={e.mainHeading} />
                                </div>
                            );
                        })
                    }

                </div>
                <div className=" max-w-full lg:max-w-[22%] w-full">
                    <div>
                        <Image src="/assets/icons/companyLogo.svg" alt='error' width="132" height="53" />
                    </div>
                    <div className='my-5'>
                        <div className="mb-4">
                            <p className='info-14-16'>Support Service</p>
                            <Link href="mailto:support@bitget.com" className='info-14'>support@bitget.com</Link>
                        </div>
                        <div className="mb-4">
                            <p className='info-14-16'>Business Opportunity</p>
                            <Link href="mailto:BD@bitget.com" className='info-14'>BD@bitget.com</Link>
                        </div>
                        <div className="mb-4">
                            <p className='info-14-16'>Trading Quant & MM</p>
                            <Link href="mailto:institution@bitget.com" className='info-14'>institution@bitget.com</Link>
                        </div>
                        <div className="mb-4">
                            <p className='info-14-16'>VIP Services</p>
                            <Link href="mailto:vip@bitget.com" className='info-14'>vip@bitget.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;