import React from 'react'
import Image from 'next/image';
import Context from '../contexts/context';
import cardImg1 from '../../public/assets/icons/explore1.svg';
import cardImg2 from '../../public/assets/icons/explore2.svg';
import cardImg3 from '../../public/assets/icons/explore3.svg';
import { useContext } from 'react';
import Announcements from './announcements';

const Explore = () => {
    const { mode } = useContext(Context);
    const cardData = [
        {
            cardImg : cardImg1,
            cardHeading : "My rewards",
            cardInfo : "Complete tasks and earn up to 5000 USDT!",  
        },
        {
            cardImg : cardImg2,
            cardHeading : "My coupons",
            cardInfo : "Your coupons are waiting for you!.",
        },
        {
            cardImg : cardImg3,
            cardHeading : "My competitions",
            cardInfo : "Join competitions to rack up some points!",
        },
    ]

  return (
    <section className=' py-10 md:py-5'>
        <div>
            <p className='section-secondary-heading'>Exploration</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-9 '>
            { cardData && cardData.map((e,i)=>{
                    return(
                        <div className=''>
                         <div key={i}  className={`relative flex justify-center flex-col items-center p-8 sm:p-10 ${i == 0 ? mode === 'dark' ? 'blue-gradient'  : 'blue-gradient-active' :''} rounded-xl text-center ${i == 1 ? mode === 'dark' ? 'yellow-gradient'  : 'yellow-gradient-active' :''}  ${i == 2 ? 'bg-purple col-span-1 lg:col-span-2' : '' }`}>
                                <div className="absolute top-8 left-8" >
                                    <h3 className='info-14-16 mb-3 sm:mb-5'>{e.cardHeading}</h3>
                                </div>
                                <Image src={e.cardImg} alt="" width={150} height={142} className="h-[142px]" />
                            </div>
                             <p className='info-14-16 mt-2'>{e.cardInfo}</p>
                        </div>
                           
                        )
                    })
                }

            </div>
        </div>
        <div className='xl:hidden'>
                <Announcements />
            </div>
    </section>
  )
}

export default Explore
