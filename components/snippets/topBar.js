import {useContext, useState} from 'react'
import Link from 'next/link';
import Context from '../contexts/context';
const TopBar = () => {
    const [alert, setAlert] = useState(true);
    const {heightUpdate}= useContext(Context)
  return (
    <>
    <div
          className={` topBar hidden bg-black-v-3 ${
            alert === true ? "lg:flex" : "lg:hidden"
          } gap-3 justify-center items-center `}
        >
          <p className=" info-14-16 text-white p-4">
            To check content specific to your region, we suggest that you choose
            <span className="text-primary">“English(South Asia)”</span> as your
            preferred country/region.
          </p>
          <Link href={""} className="cta bg-grey py-1 px-3 leading-4 text-sm ">
            confirm
          </Link>
          <button
            onClick={() => {
              setAlert(false);
              heightUpdate()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
    </>
  )
}

export default TopBar