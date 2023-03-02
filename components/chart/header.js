import Image from "next/image";
import { useContext } from "react";
import Context from "/components/contexts/context";

const Header = ({setOpen,open}) => {
  const { mode } = useContext(Context);
  return (
    <>
      <section className="p-5 dark:bg-black-v-1 border-t-[3px] border-b-4 border-primary-hover">
        <div className="flex gap-3 justify-between items-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 justify-items-center items-center ">
            <button className="flex items-center gap-2 info-14-20 " onClick={(()=>{
                setOpen(!open)
                
            })}>
              DOGE / USDT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={mode === "dark" ? "white":"currentColor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </button>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">Last Price</h4>
              <span className="info-14 leading-3 !text-primary">
                0.082041 ≈$ 0.082041
              </span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">Change</h4>
              <span className="info-14 leading-3 !text-primary">+ 1.47 %</span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">24H VOL</h4>
              <span className="info-14 leading-3 !text-primary">
                45087579.8379 DOGE
              </span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">High</h4>
              <span className="info-14 leading-3 !text-primary">0.083085</span>
            </div>
            <div className="">
              <h4 className="info-14 leading-3 hover:!text-grey">Low</h4>
              <span className="info-14 leading-3 !text-primary">0.079910</span>
            </div>
            <div></div>
          </div>
          <div className="hidden md:flex gap-2 items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 96 960 960"
              width={24}
              fill={mode === "dark" && "white"}
            >
              <path d="M720 616v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200 856V696h-40q-33 0-56.5-23.5T80 616v-80q0-33 23.5-56.5T160 456h160l200-120v480L320 696h-40v160h-80Zm100-280Zm260 134V442q27 24 43.5 58.5T620 576q0 41-16.5 75.5T560 710ZM160 536v80h182l98 58V478l-98 58H160Z" />
            </svg>
            <h4 className="info-14-16">Price Drop</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
