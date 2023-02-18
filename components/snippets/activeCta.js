import Link from "next/link";

const ActiveCta = ({data,active,setActive}) => {
    
  return (
    <><div className="flex gap-3 w-[400px] ">
    {data.map((elem, index) => {
      return (
        <Link
          onClick={() => {
            setActive(index);
          }}
          className={`pb-3 info-14-16 ${
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
  </div></>
  )
}

export default ActiveCta