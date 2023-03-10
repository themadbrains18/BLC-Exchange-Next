import heroImg from "../../public/assets/images/crypto-coins.png";
import Image from "next/image";
const VipserviceHero = () => {
    return (
        <section className='dark:bg-black py-10 md:py-20 '>
            <div className="container">
                <div className='flex items-center justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
                    <div className='max-w-full md:max-w-[48%] w-full'>
                        <h1 className='hero-heading'>Institutional Services</h1>
                        <p className='info-14-20 mt-6 md:mt-10'>BLC-Exchange offers bespoke services to institutions and professional traders</p>
                        <button className="cta mt-[30px]">Contact Us</button>
                    </div>
                    <div className='max-w-[80%] md:max-w-[48%] w-full'>
                        <Image src={heroImg} alt="hero-img" width="350px" height="400px" className="max-w-[450px] w-full mx-auto md:ml-[auto]" />
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default VipserviceHero;