import React from 'react'
import Image from 'next/image';
import Sponsor1 from '../../public/assets/sponsor1.png'
import Sponsor2 from '../../public/assets/sponsor2.png'
import Sponsor3 from '../../public/assets/sponsor3.png'

let images = ["sponsor1", "sponsor2", "sponsor3"];

const Sponsor = () => {
    return (
        <section className='bg-primary h-40  '>
            <div className="container flex justify-between p-9 items-center md:justify-around">
                {images.map((e, i) => {
                    return (
                        // <Image src={images[i]} alt="error"  className='rounded-xl my:0 lg:mx-40 items-center justify-center py-12 ' />
                        <img src={`/assets/${e}.png`} alt="" className='h-16 md:h-20 max-w-[80px] w-full  object-contain '/>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Sponsor
