import Link from "next/link";

const ActiveCta = ({ data, active, setActive, type }) => {
  return (
    <>
      {!type && (
        <div className="flex gap-5 ">
          {data.map((elem, index) => {
            return (
              <Link
                onClick={() => {
                  setActive(index);
                }}
                className={`pb-3 info-14-16 whitespace-nowrap ${
                  active === index
                    ? "border-b-2 border-primary text-black-v-3"
                    : ""
                }`}
                href={""}
                key={index}
              >
                {elem}
              </Link>
            );
          })}
        </div>
      )}
      {type === "second" && (
        <div className="flex gap-3  ">
          {data.map((elem, index) => {
            return (
              <Link
                onClick={() => {
                  setActive(index);
                }}
                className={` info-14-16 leading-[1] py-2 whitespace-nowrap ${
                  active === index
                    ? "cta2 "
                    : "transparent-cta bg-table-bg ml-2 rounded dark:text-black "
                }`}
                href={""}
                key={index}
              >
                {elem}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ActiveCta;
