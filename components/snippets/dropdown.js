import Icons from "../snippets/icons";
import Image from "next/image";
import Context from "../contexts/context";
import { useContext } from "react";
import Link from "next/link";

import { signOut } from "next-auth/react"


const Dropdown = ({
  subMenu,
  right,
  arrow,
  height,
  fixed_cta,
  specialMenu,
  svgType
}) => {
  const { mode, setLogin } = useContext(Context);

  console.log(location.pathname,'====location path name')

  return (
    <>
      <div
        className={`p-4 absolute top-[92.3%] invisible shadow-2xl group-hover:animate-open bg-white rounded-xl opacity-0 group-hover:opacity-100 group-hover:visible overflow-x-auto  ${height && "h-[100vh]"
          } dark:bg-black-v-4 ${right && "right-0"}`}
        style={{ maxHeight: "calc(100vh - 120px)" }} >
        {specialMenu && specialMenu != undefined &&

          (
            <div className={`flex gap-4 w-max justify-between`}>
              {specialMenu.map((e, i) => {
                return (
                  <div key={i}>
                    <h3 className="capitalize info-14 mb-2 px-4">{e.heading}</h3>
                    {
                      e.subMenu &&
                      e.subMenu.map((elem, index) => {
                        
                        return (
                          <Link
                            href={`/${elem.linkUrl}`}
                            key={index}
                            className={`items-center rounded flex gap-6 min-w-[330px] p-4 group/arrow  ${mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
                              } `}
                            style={{ maxHeight: "calc(100vh - 120px)" }}
                          >
                            <Icons type={elem.svgType} />
                            <div className="grow">
                              <h3 className="info-14-16 capitalize">{elem.linkText}</h3>
                              <p className="info-12 mt-1 max-w-[135px] w-full">{elem.desc}</p>
                            </div>
                            {!arrow && (
                              <Image
                                className="hidden group-hover/arrow:block "
                                src="/assets/icons/rightArrow.svg"
                                height={25}
                                width={25}
                                alt="Right Arrow"
                              />
                            )}
                          </Link>
                        )
                      })
                    }
                  </div>)
              })}
            </div>
          )}

        {subMenu != undefined &&
          subMenu != "" &&
          subMenu &&
          subMenu.map((e, index) => {
            return (
              // `${e.linkUrl}`
              <Link
                href={{pathname : `${e.linkUrl}`}}
                key={index}
                className={`items-center rounded flex gap-6 min-w-[330px] p-4 group/arrow  ${mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
                  }`}
              >
                <Icons type={e.svgType} />
                <div className="grow">
                  <h3 className="info-14-16">{e.linkText}</h3>
                  <p className="info-12 mt-1 max-w-[135px] w-full">{e.desc}</p>
                </div>
                {!arrow && (
                  <Image
                    className="hidden group-hover/arrow:block "
                    src="/assets/icons/rightArrow.svg"
                    height={25}
                    width={25}
                    alt="Right Arrow"
                  />
                )}
              </Link>
            );
          })}

        {fixed_cta && (
          <div className="border-t fixed bottom-0 pt-2  z-[1] border-grey w-[380px] rounded-b-xl  -ml-4 bg-white dark:bg-black-v-2">
            <button
              className={`info-14-16 items-center rounded  flex gap-6 min-w-[330px] p-4  group/arrow  ${mode === "dark" ? "hover:bg-black" : "hover:bg-light-hover"
                }`}
              onClick={() => {
                signOut()
                setLogin(false);
              }}
            >
              {" "}
              <Icons type={svgType} /> {fixed_cta}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
