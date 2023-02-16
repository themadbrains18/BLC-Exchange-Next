import Icons from "./icons";
import Image from "next/image";
import Context from "../contexts/context";
import { useContext } from "react";

const DropdownWallet = ({ subMenu }) => {
  const { mode } = useContext(Context);

  return (
    <>
      <div className="p-2 absolute top-8 left-[-216px] lg:left-0 invisible shadow-2xl  group-hover:animate-open bg-white opacity-0 group-hover:opacity-100 group-hover:visible  dark:bg-black-v-4">
        <div className="relative">

          <div className=" p-1  -top-3 bg-white -rotate-45 absolute left-10 dark:bg-black-v-4"></div>
        </div>
        {subMenu && subMenu.map((e, index) => {
          return (
            <div
              key={index}
              className={`items-center  flex gap-4  p-4 group/arrow ${mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
                } grow`}
            >
              <h3 className="info-14-16">{e.desc}</h3>

            </div>

          );
        })}

      </div>
    </>
  );
};

export default DropdownWallet;
