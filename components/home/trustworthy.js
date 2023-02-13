import Image from 'next/image';

import Context from '../contexts/context';

import cardImg1 from '../../public/assets/images/card1.png';
import cardImg2 from '../../public/assets/images/card2.png';
import cardImg3 from '../../public/assets/images/card3.png';
import cardImg4 from '../../public/assets/images/card4.png';
import { useContext } from 'react';



const Trustworthy = () => {

const cardData = {
    cardImg : cardImg1,
    cardHeading : "No Incidents",
    cardInfo : "Four years in operation without any security incidents.",
    
    cardImg : cardImg2,
    cardHeading : "Hassle-free",
    cardInfo : "Monetize your networks with social trading.",

    cardImg : cardImg3,
    cardHeading : "No Bottlenecks",
    cardInfo : "Copy trading strategies from top traders with our social trading platform.",

    cardImg : cardImg4,
    cardHeading : "Worry-free",
    cardInfo : "Assets are safe with our Protection Fund and PoR."
}
const { mode } = useContext(Context);
  return (
    
    <section className='dark:bg-black py-20'>
        <div className='container'>
            <div className='mb-14'>
                <h2 className='section-primary-heading mb-8'>A trustworthy crypto exchange</h2>
                <p className="info-14-24">Trade with confidence on a secure, reliable, no cost, and community-driven platform.</p>
            </div>
            <div>
                { cardData.length > 0 && cardData.map((e,i)=>{
                    return(
                            <div className={`p-10 ${ mode === 'dark' ? 'blue-gradient'  : 'blue-gradient-active' } rounded-xl`}>
                                <Image src={e.cardImg} alt="error" width={258} height={142} />
                                <h3 className='section-secondary-heading'>{e.cardHeading}</h3>
                                <p className='info-14-16'>{e.cardInfo}</p>
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