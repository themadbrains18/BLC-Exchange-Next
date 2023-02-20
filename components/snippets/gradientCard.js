import React, { useContext }  from 'react'
import Context from "../contexts/context";
const GradientCard = () => {
    const { mode } = useContext(Context);
  return (
    <> <div
    className={`card w-[480px] p-[1px] my-4 ${
      mode === "dark" ? "p-[1px] rounded-xl overflow-hidden bg-[linear-gradient(180deg,#1da2b4,#131414)]" : 
      "grey-gradiant"
    }`}
  > 
    <div className="relative grey-gradiant-active p-8 rounded-xl">
    <div className="flex gap-3 justify-between items-center">
      <img src="/assets/images/avatar.png" className="w-14 h-14 rounded-full" alt="" />
      <h3 className="info-14-20 grow !text-white">Print Money</h3>

   
      <button className="cta2">
        Copy Now
      </button>
    </div>
  <h3 className="section-secondary-heading mt-4 text-white">BTC Major Corrrection</h3>
  <p className="info-12 text-white mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, repudiandae esse doloribus iste corporis in quisquam natus nam voluptate eos! Ea in vel possimus eveniet vitae illo sed esse.</p>
    </div>
  </div>
   </>
  )
}

export default GradientCard