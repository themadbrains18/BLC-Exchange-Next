import React from 'react'
import NavAccordian from '../snippets/navAccordian'

const Faq = () => {

    const data = [
        {
            heading: "Is it safe to pay the seller?",
            info: "It is safe to pay the seller as their digital assets will be locked in the platform's wallet throughout the transaction. If the seller fails to release digital asset within 10 minutes after your payment, you can click Submit the appeal. Our customer support team will help you.",

        },
        {
            heading: "When will I receive the digital asset?",
            info: "After making the payment, please click Paid. You will receive the digital asset after the seller confirms that the payment is received.",

        },
        {
            heading: "Tips for transferring",
            info: "1. To avoid payment interception or the freezing of your card, please don't leave any message containing BTC/USDT/Bitget, etc. in the remarks during transfers. For any delayed payment due to the above reason, the Seller may choose to refuse the transaction",
        }
    ]

    return (
        <section className='dark:bg-black-v-3 px-10 py-10 md:py-20'>
            <div className='container'>
                <h1 className='section-secondary-heading'>FAQ</h1>
                
                {data && data.map((e, i) => {
                        return (
                            <div className='border-b border-border-clr py-6'>
                            <NavAccordian
                            heading={e.heading}
                            desc={e.info}
                            date={false}
                            cta={false}
                            blue={true}
                        />
</div>
                        )
                    })}
                
             

            </div>

        </section>
    )
}

export default Faq
