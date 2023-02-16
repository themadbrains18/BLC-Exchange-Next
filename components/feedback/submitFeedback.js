import React from 'react'

function SubmitFeedback() {


    const cardData = [
        {
            cardImg: 'feedback1.svg',
            cardHeading: "Safety & Security",
            cardInfo: "If you find any security flaws or bugs, please give us your feedback as soon as possible.",

        },
        {
            cardImg: 'feedback2.svg',
            cardHeading: "Product Suggestions",
            cardInfo: "If you discover any product-related bugs or want to share advice on how to optimize our products, your feedback is welcome.",
        },
        {
            cardImg: 'feedback3.svg',
            cardHeading: "Design & Layout",
            cardInfo: "Submit advice related to visual features or usability. Your feedback is always welcome.",
        },
        {
            cardImg: 'feedback4.svg',
            cardHeading: "Operational Feedback",
            cardInfo: "If there are any misunderstandings in content related to events or announcements, your feedback is welcome."
        },
        {
            cardImg: 'feedback5.svg',
            cardHeading: "Share Your Thoughts",
            cardInfo: "For advice on other aspects of the platform, your feedback is welcome."
        },
    ]



    return (
        <section className='bg-white dark:bg-black-v-3 py-10 md:py-20'>
            <div className='container flex flex-col items-center'>
                <h1 className='text-3xl md:text-5xl leading-[60px] font-noto font-bold self-center dark:text-white'>Submit Feedback</h1>
                <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-7'>
                    {cardData && cardData.map((e, item) => {
                        return(

                        <div key={item} className='flex flex-col sm:flex-row items-center p-5 rounded-2xl max-w-[80%] sm:max-w-full mx-auto sm:mx-0 sm:rounded-[100px] cursor-pointer gap-4 bg-[#f5f5f5] sm:bg-gradient-to-r from-[#f5f5f5] to-[hsla(0,0%,98.4%,0)]' >
                            <img src={`/assets/icons/${e.cardImg}`}></img>
                            <div className='text-center '>
                                <span className='info-14-20 text-black dark:text-black'>
                                    {e.cardHeading}
                                </span>
                                <p className='mt-3 info-14 '>{e.cardInfo}</p>
                            </div>
                        </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default SubmitFeedback
