import Image from 'next/image';

import Context from '../contexts/context';

import cardImg1 from '../../public/assets/images/card1.png';
import cardImg2 from '../../public/assets/images/card2.png';
import cardImg3 from '../../public/assets/images/card3.png';
import cardImg4 from '../../public/assets/images/card4.png';
import { useContext } from 'react';



const Trustworthy = () => {

const cardData = [
    {
        cardImg : cardImg1,
        cardHeading : "No Incidents",
        cardInfo : "Four years in operation without any security incidents.",
        
    },
    {
        cardImg : cardImg2,
        cardHeading : "Hassle-free",
        cardInfo : "Monetize your networks with social trading.",
    },
    {
        cardImg : cardImg3,
        cardHeading : "No Bottlenecks",
        cardInfo : "Copy trading strategies from top traders with our social trading platform.",
    },
    {
        cardImg : cardImg4,
        cardHeading : "Worry-free",
        cardInfo : "Assets are safe with our Protection Fund and PoR."
    }
]
const { mode } = useContext(Context);
  return (
    
    <section className='dark:bg-black py-20'>
        <div className='container'>
            <div className='mb-10 sm:mb-14'>
                <h2 className='section-primary-heading mb-5 sm:mb-8'>A trustworthy crypto exchange</h2>
                <p className="info-14-24">Trade with confidence on a secure, reliable, no cost, and community-driven platform.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                { cardData && cardData.map((e,i)=>{
                    return(
                            <div key={i}  className={`flex justify-center flex-col items-center p-8 sm:p-10 ${i == 0 ? mode === 'dark' ? 'blue-gradient'  : 'blue-gradient-active' :''} rounded-xl text-center ${i == 1 ? mode === 'dark' ? 'yellow-gradient'  : 'yellow-gradient-active' :''} ${i == 2 ? mode === 'dark' ? 'pink-gradient '  : 'pink-gradient-active' :''} ${i == 3 ? 'bg-purple col-span-1 lg:col-span-2' : '' }`}>
                                <Image src={e.cardImg} alt="" width={200} height={142} className={`${i == 2 ? 'max-w-[150px] w-full' :'' }`} />
                                <div className="mt-4" >
                                    <h3 className='section-secondary-heading mb-3 sm:mb-5'>{e.cardHeading}</h3>
                                    <p className='info-14-16'>{e.cardInfo}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Trustworthy;