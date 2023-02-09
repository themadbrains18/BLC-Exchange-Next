import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black-v-4 py-14 dark'>
        <div className="container">
            <div className="flex ...">
                <div className="max-w-[75%] w-full grid gap-12 grid-cols-4">
                    <div>
                        <h4 className='info-14-20 mb-6'>Company</h4>
                        <ul>
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
                        <ul>
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
                        <ul>
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
                        <ul>
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
                        <ul>
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
                        <ul>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Copy Trading</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="#" className='info-14 '>Strategy Trading</Link>
                            </li>
                           
                        </ul>
                    </div>
                
                  

                </div>
                <div className="max-w-[25%] w-full">

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;