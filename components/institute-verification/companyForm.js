import React, { useState, useRef, useEffect, useContext } from 'react'
import SearchDropdown from '../snippets/search-dropdown';
import Context from '../contexts/context';
import AttacheFile from './attacheFile';

function CompanyForm() {
    const codedropdown = useRef(null);
    const [dialCode, setDialCode] = useState(91)
    const [show, setShow] = useState(1);
    const [DropdownPhone, setDropdownPhone] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [countryName, setCountryName] = useState('India');
    const [countryName2, setCountryName2] = useState('India');
    const [next, setNext] = useState(0);
    const dropdown = useRef(null);
    const dropdown2 = useRef(null);
    const { mode, setClick } = useContext(Context);
    useEffect(() => {
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
            else if (dropdown2.current && !dropdown2.current.contains(event.target)) {
                setShowDropdown2(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [])

    return (
        <section className='dark:bg-black-v-4'>
            {next === 0 &&
            <div>
                <h2 className='info-14-24 font-medium'> Company Information </h2>
                <form>
                    <div className='md:mt-8 mt-5' >
                        <div className='sm:max-w-[343px] w-full '>
                            <p className=' mb-2  info-14-2'>Registered country</p>
                             <div className="relative" ref={dropdown}>
                                <div className='info-14 dark:bg-black-v-4 dark:text-white hover:!text-grey inline-flex items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary w-full' onClick={(e) => { setShowDropdown(!showDropdown) }} >
                                    <div className="flex items-center gap-2 justify-between w-full ">
                                        <p className="text-black dark:text-white text-end" id="countryName">{countryName}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={mode === "dark" ? "white" : "grey"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                    </div>
                                </div>
                                {
                                    showDropdown != false &&
                                    <SearchDropdown setShowDropdown={setShowDropdown} country={true} setCountryName={setCountryName} />
                                }
                            </div>
                        </div>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2'>Company name</label>
                        <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text" name="name"></input>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Registration number (company number / tax file number)</label>
                        <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text"></input>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Registered country</label>
                        <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text"></input>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Company website link (optional)</label>
                        <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text"></input>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Links to government websites that certify company registration information</label>
                        <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text"></input>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Company business introduction</label>
                        <textarea rows={6} className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary  w-full' type="text"></textarea>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Source of funding</label>
                        <textarea rows={6} className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary  w-full' type="text"></textarea>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Office address</label>
                        <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text"></input>
                    </div>

                    <div className='md:mt-8 mt-5'>
                        <label className='mb-2 block info-14-2' >Company email</label>
                        <input className='block info-14  dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="email"></input>
                    </div>
                    <div className='md:mt-10 mt-5' >
                        <h3 className='info-14-24 font-medium'>Authorized Personnel Information</h3>
                        <div className='flex sm:max-w-[720px] md:gap-2 md:flex-row  flex-col w-full justify-between'>
                            <div className='md:mt-8 mt-5 xsm:max-w-[343px] w-full'>
                                <label className='mb-2 block info-14-2'>First name</label>
                                <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text" name="name"></input>
                            </div>

                            <div className='md:mt-8 mt-5 sm:max-w-[343px] w-full'>
                                <label className='mb-2 block info-14-2' >Last Name</label>
                                <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="text"></input>
                            </div>
                        </div>
                        <div className='md:mt-8 mt-5 sm:max-w-[343px] w-ful'>
                            <p className=' mb-2  info-14-2'>Registered country</p>
                            <div className="relative" ref={dropdown2}>
                                <div className='info-14 dark:bg-black-v-4 dark:text-white hover:!text-grey inline-flex items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary w-full' onClick={(e) => { setShowDropdown2(!showDropdown2) }} >
                                    <div className="flex items-center gap-2 justify-between w-full ">
                                        <p className="text-black dark:text-white text-end" id="countryName">{countryName2}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={mode === "dark" ? "white" : "grey"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                    </div>
                                </div>
                                {
                                    showDropdown2 != false &&
                                    <SearchDropdown setShowDropdown={setShowDropdown2} country={true} setCountryName={setCountryName2} />
                                }
                            </div>
                        </div>
                        <div className='md:mt-8 mt-5 sm:max-w-[343px] w-ful'>
                        <p className=' mb-2  info-14-2'>Registered country</p>
                        <div className="border border-black dark:border-white rounded min-h-[46px] mb-4 px-4 flex items-center relative" ref={codedropdown}>
                            <div className="flex items-center gap-2  min-w-[90px] cursor-pointer" onClick={() => { setDropdownPhone(!DropdownPhone) }}>
                                <span className="text-black dark:text-white" id="counteryCode">+ <span>{dialCode}</span> </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#656e6f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                            </div>
                            <input type="number" maxLength={99999999999} placeholder="Mobile number" onFocus={() => setDropdownPhone(false)} className=" block  px-4 max-w-full w-full bg-transparent font-noto text-black dark:text-white outline-none border-l-[1px] border-grey focus:!border-primary"
                            />
                            {
                                DropdownPhone != false &&
                                <SearchDropdown setDropdownPhone={setDropdownPhone} code={true} setDialCode={setDialCode} />
                            }

                        </div>
                        </div>

                        <div className='md:mt-8 mt-5 sm:max-w-[343px] w-full'>
                            <label className='mb-2 block info-14-2' >Email address</label>
                            <input className='block info-14 dark:bg-black-v-4 dark:text-white  hover:!text-grey dark:hover:!text-white items-center gap-3 cursor-pointer border-2 rounded-lg border-border-clr p-3 hover:border-primary max-w-[720px] w-full' type="email"></input>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-between sm:max-w-[343px] w-full md:mt-14 mt-7'>
                        <button className='cta2 block sm:max-w-[160px] w-full'>Save</button>
                        <button className='cta w-full block sm:max-w-[160px] ' onClick={() => { setNext(1) }}>Next</button>
                    </div>
                </form>
            </div>
        }
        {
        next === 1 &&
        <AttacheFile/>
        }
        </section>
    )
}

export default CompanyForm