import { Fragment, useState, useEffect } from 'react'


// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';


const DropDownActive = ({ idData, coinData }) => {



    // const schema = yup
    // .object()
    // .shape({
    //     register: yup.string().required('This field is required'),

    // })
    // .required();
    // const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({
    //     mode: "onChange",
    //     resolver: yupResolver(schema),
    // });
    const [img,setImg] = useState('')
    const [item, setItem] = useState('Please Select Option')
    const [showDropdown, setShowDropdown] = useState(false);
    const [rotate, setRotate] = useState(false);


    return (
        <>
            <span className='cursor-pointer border-b-2 border-border-clr hover:border-primary relative max-w-md w-full flex items-center gap-2  justify-between mt-4' onClick={(e) => { setShowDropdown(!showDropdown), setRotate(!rotate) }}>
                <input type='text' className="text-black dark:text-white outline-none" id="countryName" value={item}></input>
                <div className={`${rotate ? "rotate-180" : ''} duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                {
                    showDropdown != false &&
                    <div className='bg-white dark:bg-black-v-5 animate-bottom duration-500 absolute top-[100%] rounded-t-3xl md:rounded-none left-0 w-full border border-grey max-h-[350px] overflow-auto z-10'>
                        <div className={`p-4 sticky top-0 left-0 w-full bg-white dark:bg-black-v-5 ${idData ? 'hidden' : 'block'}`}>
                            <input type="search" placeholder="search" className="block  px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[40px] text-black dark:text-white outline-none focus:!border-primary" name="search" />
                        </div>
                        <ul>
                            {
                                idData &&
                                idData.map((e, i) => {
                                    return (
                                        <Fragment key={i}>
                                            {
                                                <li className="cursor-pointer info-14 !text-black flex gap-2 p-3 dark:!text-white px-4 hover:bg-[#cccccc1f]"
                                                    onClick={() => {
                                                        console.log(e)
                                                        setItem(e)
                                                    }}>

                                                    <span>{e}</span>
                                                </li>
                                            }

                                        </Fragment>
                                    )
                                })
                            }
                            {

                                coinData.length > 0 &&
                                coinData.map((e, i) => {
                                    return (
                                        <Fragment key={i}>
                                            {
                                                coin &&
                                                <li className="cursor-pointer info-14 !text-black flex gap-2 p-3 dark:!text-white px-4 hover:bg-[#cccccc1f]" onClick={() => { setImg(e.image), setItem(e.name) }}>
                                                    <img src={`/assets/images/${e.image}`} className='max-w-[24px] w-full h-auto'></img>
                                                    <span>{e.name}</span>
                                                </li>
                                            }

                                        </Fragment>
                                    )
                                })
                            }

                        </ul>
                    </div>
                }
            </span>


        </>
    )
}

export default DropDownActive
