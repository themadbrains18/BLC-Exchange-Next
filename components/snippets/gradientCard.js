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
      <h3 className="info-14-20 grow text-black">Print Money</h3>

   
      <button className="bg-transparent h-auto text-primary info-12 border border-primary p-2 rounded dark:text-primary">
        Copy Now
      </button>
    </div>
  <h3 className="section-secondary-heading mt-4 text-grey">BTC Major Corrrection</h3>
  <p className="info-12 text-black mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. A reprehenderit, repudiandae esse doloribus iste corporis in quisquam natus nam voluptate eos! Ea in vel possimus eveniet vitae illo sed esse.</p>
    </div>
  </div> </>
  )
}

export default GradientCard