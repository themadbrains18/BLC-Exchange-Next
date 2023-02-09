import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=' py-14 '>
        <div className="container">
            <div className="flex flex-wrap gap-3">
                <div className="max-w-full lg:max-w-[72%] w-full grid gap-0 sm:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                    <div>
                        <h4 className='info-14-20 mb-6'>Company</h4>
                        <ul className="h-0 overflow-hidden sm:h-auto">
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>About Us</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Protection Fund</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Proof of Reserves</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Twitter</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Bitget Token</Link>
                            </li>
                            <li>
                                <Link href="#" className='info-14'>Careers</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className='info-14-20 mb-6'>Products</h4>
                        <ul className="h-0 overflow-hidden sm:h-auto">
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Buy Crypto</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Futures</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Spot</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Copy Trading</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className='info-14-20 mb-6'>Service</h4>
                        <ul className="h-0 overflow-hidden sm:h-auto">
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Bitget Academy</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Bitget Launchpad</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Promotions</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Referral Program</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Affiliate program</Link>
                            </li>
                            <li>
                                <Link href="#" className='info-14'>VIP Services</Link>
                            </li>
                            <li>
                                <Link href="#" className='info-14'>Institutional Services</Link>
                            </li>
                            <li>
                                <Link href="#" className='info-14'>API Trading</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className='info-14-20 mb-6'>Legal & Disclosures</h4>
                        <ul className="h-0 overflow-hidden sm:h-auto">
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Regulatory License</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>AML/KYC Policies</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Privacy Policy</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Terms of Use</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Legal Statement</Link>
                            </li>
                            <li>
                                <Link href="#" className='info-14'>Risk Disclosure</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className='info-14-20 mb-6'>Support</h4>
                        <ul className="h-0 overflow-hidden sm:h-auto">
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Feedback</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Fee Schedule</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Official Verification Channel</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Announcements</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Buy Bitcoin</Link>
                            </li>
                           
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className='info-14-20 mb-6'>Copy Trading</h4>
                        <ul className="h-0 overflow-hidden sm:h-auto">
                            <li className='mb-5'>
                                <Link href="#" className='info-14'>Copy Trading</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Strategy Trading</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                <div className=" max-w-full lg:max-w-[22%] w-full">
                    <div>
                        {/* <Image src="" alt='error' width="132" height="53" /> */}
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