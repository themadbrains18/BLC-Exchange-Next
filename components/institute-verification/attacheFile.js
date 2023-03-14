
import React, { useState } from "react";
import Image from 'next/image';
function AttacheFile() {
    const [file, setFile] = useState([]);

    function handleChange(e) {
        console.log("============hjkfhksdjhfkjshd=",e.target.files[0])
        // setFile(URL.createObjectURL(e.target.files[0]));
        //  setFile(e.target.files[0]);

        if(file.length > 0){
            setFile(pre => [...pre,URL.createObjectURL(e.target.files[0])])
        }else{
            // files.push(URL.createObjectURL(e.target.files[0]))
            setFile([URL.createObjectURL(e.target.files[0])])
        }

        // let files=[]

        // setFile(files)
    }
    return (
        <>
            <section className='dark:bg-black-v-4'>
                <div>
                    <div className='info-14-24 font-medium'>
                        <h2> Attach Files </h2>
                    </div>
                    <form>
                        <ul>
                            <li>
                                <h4 className='md:mt-8 mt-5 mb-2 info-14-20'>Certificate of Incorporation</h4>
                                <span className='block info-14-2 text-[#919899]'>Attach a maximum of 10 JPG/JPEG/PNG files, each file no more than 2 MB.</span>
                                <ul className="flex mt-2">
                                {file.length > 0 &&
                                    
                                    file.map((item, itndex)=>{
                                    
                                       return (
                                         <li className='rounded-lg group relative block overflow-hidden'>
                                        <Image className="rounded-lg hover:bg-green-400" src={item} alt="" width={104} height={104} />
                                        <div className="opacity-0 bg-[#000000a1] absolute top-0 left-0 w-[100px] h-[100px ] group-hover:w-full group-hover:h-full group-hover:opacity-60 duration-400">
                                        </div>
                                        <div className="flex absolute gap-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible group-hover:visible z-20">
                                            <button className="block  w-[20px] h-[20px] cursor-pointer">
                                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-zoom-in  stroke-white"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /><line x1={11} y1={8} x2={11} y2={14} /><line x1={8} y1={11} x2={14} y2={11} /></svg>
                                            </button>
                                            <button className="block w-[20px] h-[20px] cursor-pointer">
                                                <svg classxmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className=" fill-white">
                                                    <g id="Layer_20" data-name="Layer 20">
                                                        <path d="M49.93,17.33H41.87V12a1.5,1.5,0,0,0-1.5-1.5H23.63a1.5,1.5,0,0,0-1.5,1.5v5.33H14.07a1.5,1.5,0,0,0,0,3H16V48a5.49,5.49,0,0,0,5.49,5.48h21.1A5.49,5.49,0,0,0,48,48V20.33h1.89A1.5,1.5,0,0,0,49.93,17.33ZM25.13,13.5H38.87v3.83H25.13ZM45,48a2.49,2.49,0,0,1-2.49,2.48H21.45A2.49,2.49,0,0,1,19,48V20.33H45Z" />
                                                        <path d="M28,25.87a1.5,1.5,0,0,0-1.5,1.5V43.46a1.5,1.5,0,1,0,3,0V27.37A1.5,1.5,0,0,0,28,25.87Z" />
                                                        <path d="M36,25.87a1.5,1.5,0,0,0-1.5,1.5V43.46a1.5,1.5,0,1,0,3,0V27.37A1.5,1.5,0,0,0,36,25.87Z" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>

                                    </li>)
                                    })
                                }

                                    <li className=''>
                                        <span className='relative w-[120px] inline-block'>
                                            <input type="file" onChange={handleChange} className='file:w-[104px] w-[104px] file:h-[104px] h-[104px] block file:text-transparent text-transparent file:rounded-2 file:border-[1px] file:border-dashed hover:file:border-blue-500 file:border-grey file:bg-[#f9f9f9]' multiple />
                                            <svg version="1.1" className='absolute top-[48%] block left-[46%] translate-x-[-50%] translate-y-[-50%] w-[12px] h-[12px]' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                                <path d="M9.077,25.99h14v14c0,0.553,0.448,1,1,1s1-0.447,1-1v-14h14c0.552,0,1-0.447,1-1s-0.448-1-1-1h-14v-14c0-0.553-0.448-1-1-1
                                            s-1,0.447-1,1v14h-14c-0.552,0-1,0.447-1,1S8.525,25.99,9.077,25.99z" />
                                            </svg>
                                        </span>
                                    </li>
                                  
                                   
                                </ul>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AttacheFile