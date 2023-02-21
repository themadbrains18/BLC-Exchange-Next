import SearchDropdown from "/components/snippets/search-dropdown";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const Deposit = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Layout data>
        {/* <div className="relative" onClick={(()=>{
          setShow(!show)
        })}>
        {
            show &&  <div>
            <SearchDropdown currency={true} />
            </div>
        }
    </div> */}
        <div>
          <Image
            src="/assets/images/launchPadOffer.png"
            height={360}
            width={360}
          />
        </div>
      </Layout>
    </>
  );
};

export default Deposit;
