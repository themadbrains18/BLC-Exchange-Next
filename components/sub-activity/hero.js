import heroImg from "../../public/assets/images/hero-img.png";
import Image from "next/image";
const SubActivityhero = () => {
    return (
        <section className='dark:bg-black py-10 md:py-20 '>
            <div className="container">
                <div className='flex items-center justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
                    <div className='max-w-full md:max-w-[48%] w-full'>
                    <h1 className='hero-heading'>BLC Exchange GroupCoin</h1>
                    <p className='info-14-20 mt-6 md:mt-10'>Participate in GroupCoin and get up to<span className="!text-[40px]  !text-primary"> 50% </span>off featured crypto</p>
                    </div>
                    <div className='max-w-[80%] md:max-w-[48%] w-full'>
                        <Image src={heroImg} alt="hero-img" width="450px" height="400px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubActivityhero;