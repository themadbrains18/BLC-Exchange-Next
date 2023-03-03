import Link from "next/link";

const ActiveCta = ({ data, active, setActive, type }) => {
  return (
    <>
      {!type && (
        <div className="flex gap-5 ">
          {data.map((elem, index) => {
            return (
              <div
             
                onClick={() => {
                  setActive(index);
                }}
                className={`pb-1 info-14-16 whitespace-nowrap ${
                  active === index
                    ? "border-b-4 border-primary text-black-v-3 "
                    : ""
                }`}
           
                key={index}
              >
                {elem}
              </div>
            );
          })}
        </div>
      )}
      {type === "second" && (
        <div className="flex gap-3  ">
          {data.map((elem, index) => {
            return (
              <div
                onClick={() => {
                  setActive(index);
                }}
                className={` info-14-16 leading-[1] py-2 whitespace-nowrap ${
                  active === index
                    ? "cta2 p-4"
                    : "transparent-cta bg-table-bg ml-2 rounded border border-transparent p-4 hover:!text-grey dark:bg-deep-blue dark:!text-white"
                }`}
      
                key={index}
              >
                {elem}
              </div>
            );
          })}
        </div>
      )}
      {type === "third" && (
        <div className="flex gap-3  ">
          {data.map((elem, index) => {
            return (
              <div
                onClick={() => {
                  setActive(index);
                }}
                className={` info-14-16 leading-[1] py-2 whitespace-nowrap ${
                  active === index
                    ? "cta2 "
                    : "transparent-cta bg-table-bg ml-2 rounded dark:text-black  "
                }`}
         
                key={index}
              >
                {elem}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ActiveCta;
