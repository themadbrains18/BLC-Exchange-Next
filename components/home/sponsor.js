import React from 'react'

let images = ["sponsor1", "sponsor2", "sponsor3"];

const Sponsor = () => {
    return (
        <section className='bg-primary h-40  '>
            <div className="container flex justify-between p-9 items-center md:justify-around">
                {images.map((e, i) => {
                    return (
                        <img src={`/assets/images/${e}.png`} alt="" className='h-16 md:h-20 max-w-[80px] w-full  object-contain '/>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Sponsor
