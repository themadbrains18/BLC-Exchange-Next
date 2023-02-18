import Link from "next/link";
import { useState } from "react";
import ActiveCta from "./activeCta";
import NavAccordian from "./navAccordian";

const NotificationHover = () => {
  const [active, setActive] = useState(0);
  let arr = ["All", "Activities", "Bigest Daily"];
  return (
    <>
      <div className="p-4 absolute top-[100.6%] invisible shadow-2xl group-hover:animate-open bg-white rounded-xl opacity-0 group-hover:opacity-100 group-hover:visible overflow-x-auto h-[358px] right-0 dark:bg-black-v-4">
        <div className="flex gap-4 justify-between overflow-auto mb-4">
          <h3 className="info-14-20">Notification Center</h3>
          <Link href={""} className="info-14-16 text-grey">
            View All
          </Link>
        </div>
        <ActiveCta data={arr} active={active} setActive={setActive}/>
        <NavAccordian
          heading="dfdh"
          desc={"hamid exchange is live"}
          date={true}
          cta={true}
        />
      </div>
    </>
  );
};

export default NotificationHover;
