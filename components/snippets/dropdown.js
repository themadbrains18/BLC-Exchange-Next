import Icons from "../snippets/icons";
import Image from "next/image";
import Context from "../contexts/context";
import { useContext } from "react";

const Dropdown = ({ subMenu }) => {
  const { mode } = useContext(Context);

  return (
    <>
      <div className="p-4 absolute top-[100.6%] invisible shadow-2xl group-hover:animate-open bg-white rounded-xl opacity-0 group-hover:opacity-100 group-hover:visible overflow-x-auto h-[358px] dark:bg-black-v-4">
        {subMenu && subMenu.map((e, index) => {
          return (
            <div
              key={index}
              className={`items-center rounded flex gap-6 min-w-[330px] p-4 group/arrow ${
                mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
              }`}
            >
              <Icons type={e.svgType} />
              <div className="grow">
                <h3 className="info-14-16">{e.linkText}</h3>
                <p className="info-12 mt-1">{e.desc}</p>
              </div>
              <Image
                className="hidden group-hover/arrow:block "
                src="/assets/icons/rightArrow.svg"
                height={25}
                width={25}
                alt="Right Arrow"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
