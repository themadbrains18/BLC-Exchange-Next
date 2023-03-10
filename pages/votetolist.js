import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VotingCard from '@/components/snippets/votingCard';


const VotetoList = () => {
    const [active, setActive] = useState(1  );

    return (
        <section className='dark:bg-black md:mb-[50px] mb-[30px]'>
            <div className="container">

                <div className='flex items-center justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
                    <div className='max-w-full md:max-w-[48%] w-full'>
                        <h1 className='hero-heading font-noto font-bold text-[#1da2b4]'>Vote to List</h1>
                        <p className='info-14-24 font-semibold text-[] mt-[10px]'>Vote for the project you love and support to receive massive airdrops!</p>

                        <Link href="/" className='info-14 flex items-center justify-center md:justify-start gap-2 md:mt-[36px] mt-[20px]'>
                            <Image src="/assets/icons/share.png" alt="img" className='block' width={28} height={28} />
                            <p className='info-14-16 block text-[#1da2b4]'>Share </p>
                        </Link>
                    </div>
                    <div className='max-w-[75%] md:max-w-[48%] w-full  '>
                        <Image src="/assets/images/votetolistImg.png" alt="img" className='my-0 mx-[auto]' width={450} height={400} />
                    </div>
                </div>

                <div className='tab_wrap flex gap-3'>
                    <div className='flex gap-3 md:gap-16 w-[65%]'>
                        <div className= {`info-14-24 font-bold cursor-pointer text-[#919899]   ${active === 1 ? "!text-[#000] border-b-4 border-primary ":""} `} onClick={()=>{setActive(1)}}> Ongoing Projects </div>
                        <div className={`info-14-24 font-bold cursor-pointer  text-[#919899]  ${active === 2 ? "!text-[#000] border-b-4 border-primary ":""} `} onClick={()=>{setActive(2)}}>Past Projects</div>
                    </div>
                    <div className='w-[35%] text-center'>
                        <Link href="/" className='flex justify-end gap-2 items-center'>
                            <Image src="/assets/icons/record-icon.svg" alt="img" className='block' width={32} height={32} />
                            <span className='info-14-20 font-semibold block '>Voting Record</span>
                        </Link>
                    </div>
                </div>

                {/* Tab 1 content */}
                <div className={`my-0 mx-auto  md:pt-[80px] pt-[30px] text-center  ${active === 1 ? "block":"hidden"}`}>
                    <Image src="/assets/icons/no-data23.svg" alt="img" className='block my-0 mx-auto' width={60} height={60} />
                    <p className='info-14-16 block text-[#a7b1bb] mt-[30px]'>No Data </p>
                </div>

                {/* Tab 2 content */}
                <div className={` md:pt-[58px] pt-[30px] ${active === 2 ? "block":"hidden "}`}>
                    < VotingCard />
                </div>
            </div>
        </section>
    )
}

export default VotetoList
