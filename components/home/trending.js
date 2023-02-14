import {useState} from 'react'
import Image from 'next/image';
import Coin1 from '../../public/assets/images/coin1.png';
import Graph from '../../public/assets/images/graph.png';
const Trending = () => {
const[show,setShow] = useState(1);
  return (
    <section className="py-20 dark:bg-black-v-4">
        <div className="container">
            <div className="flex items-start gap-8"> 
                <div className='max-w-[72%] w-full'>
                    <div className={`flex items-end gap-5 mb-[40px]`}>
                        <button className={`${show === 1 ? "hero-heading":"section-secondary-heading"}`} onClick={()=>{setShow(1)}}>Trending</button>
                        <button className={`${show === 2 ? "hero-heading":"section-secondary-heading"}`} onClick={()=>{setShow(2)}}>Innovation</button>
                    </div>
                        <div>
                            {
                                show === 1 &&
                                
                          <div className="p-[1px] rounded-lg hover:bg-gradient-to-r from-[#30bce8]">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-gradient-to-r from-[#1da2b459]">
                                            <div className='flex items-center gap-3'>
                                                <Image src={Coin1} alt="" width={24} height={24} className="rounded-full" />
                                                <div className="flex items-end gap-2 flex-wrap	">
                                                    <p className="info-14-24">PSI</p>
                                                    <p className="info-14-16 !text-grey">USDT</p>
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-2 flex-wrap	">
                                                <p className="info-14-24">₮ 6.8954</p>
                                                <p className="info-14-16 !text-grey">$ 6.90</p>
                                            </div>
                                            <p className="info-14-16 !text-primary">+25%</p>
                                            <div>
                                                <Image src={Graph} alt='' width={150} height={30} />
                                            </div>
                                        </div>
                                    </div>
                            }
                            {
                                show === 2 &&
                                <div className="">
                                    inovation
                                </div>
                            }
                        </div>
                </div>
                <div className='max-w-[25%] w-full'>
                    right content
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending;