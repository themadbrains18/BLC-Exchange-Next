import React from 'react'
import Image from 'next/image'
const AdImage = () => {
  return (

    <div className="hidden lg:block">
    <Image
      src="/assets/images/launchPadOffer.png"
      height={360}
      width={360}
      alt=""
    />
  </div>
  )
}

export default AdImage