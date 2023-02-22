import React from 'react'


const Serve = () => {

    let data = [
        {
            date: '2022/04/28 18:29:27',
            user: '979***9792',
            type: 'Product Suggestions',
            feedback: 'Hello, I would like to suggest adding a "Hide Full" function in copy trade, it will be more convenient for us to choose the traders, thanks!',
            reply: 'Thank you for your feedback, we have added this function, hope that you can enjoy trading here!'
        },
        {
            date: '2021/03/10 14:21:15',
            user: 'mochcholid****@gmail.com',
            type: 'Share Your Thoughts',
            feedback: 'I think in the BLC-Exchange application there should be a widget feature to help traders monitor price movements automatically',
            reply: 'Widget for price quotes has already been added on App, please refer to the real-time tracking in setting.'
        },

    ]




    return (
        <section className='bg-white dark:bg-black-v-5 py-10 md:py-20'>
            <div className='container '>
                <h1 className='text-3xl md:text-5xl leading-[60px] font-noto font-bold text-center dark:text-white'>We are proud to serve you</h1>
         
                    {data && data.map((e, i) => {
                        return(
                        <div className='border border-[#dee1e4] rounded-sm p-10 mt-14' >
                            <div className='flex flex-col sm:flex-row gap-2 sm:gap-6   p-3 bg-gradient-to-r from-[#f7f7f7] to-[hsla(0,0%,98.4%,0)] rounded-xl sm:rounded-[100px]'>
                                <div className='flex  gap-1'>
                                    <img src="https://img.icons8.com/sf-ultralight/25/null/clock.png" alt='error' />
                                    <p className='info-14-16 dark:text-black'>{e.date}</p>
                                </div>
                                <p className='info-14-16 dark:text-black '>User: {e.user}</p>

                            </div>
                            <div className='mt-8'>
                                <div className='flex gap-4'>
                                    <span className='info-14-16 bg-primary border-primary text-white px-2 rounded'>{e.type}</span>
                                    <p className='info-14-16'>User feedback: </p>
                                    <img src="https://img.icons8.com/small/24/null/happy.png" alt='error' />
                                </div>
                                <p className='info-14 border-0 sm:border-l sm:border-dashed border-primary ml-0 sm:ml-12 pl-0 sm:pl-14 p-5 pb-7'>{e.feedback}</p>
                                {e.reply &&
                                    <div className='flex flex-col sm:flex-row items-start'>
                                        <div className='border-collapse sm:border-t border-dashed border-primary w-0 sm:w-16 top-3 ml-12'></div>
                                        <p className='-mt-3 px-2 text-primary border border-primary rounded info-14-16'>Adopted</p>
                                        <p className='mt-4 sm:-mt-3 info-14-16  ml-0 sm:ml-4'>{e.reply}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default Serve
