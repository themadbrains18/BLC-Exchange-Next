
import Carousel from '../snippets/carousel';
import { useEffect, useState } from 'react';

const Tutorials = () => {


    const [Data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            await fetch("http://localhost:3000/api/hello")
                .then((res) => res.json())
                .then((data) => {

                    setData(data.tutorials);

                    /* process your data further */
                })
                .catch((error) => console.error(error));
        })().catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <section className="ai_zone bg-white dark:bg-black-v-5 py-[80px] md:py-[120px]">
            <div className="container">
                <div >
                    <div className='hero-heading'>Your passport to the world of Crypto</div>
                    <p className='info-14-20 mt-6 md:mt-6 mb-10 md:mb-20'>Build your crypto knowledge by exploring the latest BLC-Exchange tutorials.</p>
                </div>
                <Carousel data={Data} play_cta={true} arrow={true}></Carousel>
             
            </div>
        </section>
    )
}

export default Tutorials;