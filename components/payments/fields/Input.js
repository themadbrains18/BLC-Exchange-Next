const Input = ({type, label, name, id,required, register, errors}) => {

  return (
    <>
    { type === 'file' ?
            <div className="w-full my-6 ">
                <label className=" dark:!text-white !text-black mt-[15px] text-center mb-3">{required == "true" ? <span className='text-[#f00]'>*</span> : "{Optional)"} {label}</label>
                <div className="h-24 dark:!bg-black relative rounded-none mt-1 border border-dotted border-[#b0a4b366] text-center">
                    <input type={type}  accept="image/jpeg,image/JPEG,image/jpg,image/JPG,image/png,image/PNG,image/bmp" className="w-full h-24 opacity-0 cursor-pointer rounded border border-[#b0a4b366] bg-transparent absolute bottom-0" {...register(`${name}`, { required: true })} />
                    <i className="dark:!text-white !text-black text-center mt-8 block">+</i>
                </div>

            </div> 
          

    :
            <div className="w-full my-6">
                <label className=" dark:!text-white !text-black mt-[15px] text-center mb-3">{required === "true" ? <span className='text-[#f00]'>*</span> : "{Optional)"} {label}</label>
                <input type={type}  className="w-full h-10 text-black px-3 dark:!text-white rounded border border-[#b0a4b366] bg-transparent" {...register(`${name}`, { required: true })}  />
            </div>  
                 
    }
    </>
  )
}
export default Input