import React from 'react'

import Carousel from  '../snippets/carousel';
import partner1 from '../../public/assets/images/partner1.png';
import partner2 from '../../public/assets/images/partner2.png';
import partner3 from '../../public/assets/images/partner3.png';



let image = [
    {
        bigImage:partner1
    },
    {
        bigImage:partner2
    },
    {
        bigImage:partner3
    },
    {
        bigImage:partner1
    },
    {
        bigImage:partner2
    },
    {
        bigImage:partner3
    },
    {
        bigImage:partner1
    },
    {
        bigImage:partner2
    },
    {
        bigImage:partner3
    },
] 

const Partners = () => {
  return (
    <section className='bg-white dark:bg-black-v-3'>
     
        <h1 className='container dark:text-white text-4xl leading-10 font-bold py-[80px] md: pb-8'>Our Partners</h1>
        <div className='mt-5'> 
        <Carousel  data={image} arrow={false} />
      </div> 
    </section>
  )
}

export default Partners
