import React from 'react'
import Image from 'next/image';
import laftImage from "../../public/assets/images/form-left-new.png";
const LeftSide = () => {
  return (
    <div className="hidden md:block max-w-[50%] w-full">
        <h3 className="section-secondary-heading mb-5">Get together ,trade <br />together</h3>
        <p className="info-14-20 mb-[50px]">Embrace crypto and connectwith the future.</p>
        <Image src={laftImage} alt="" width={450} height={400} className="max-w-[270px] mx-auto w-full" />
    </div>
  )
}

export default LeftSide