import SideBar from "@/components/asset/sideBar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";



const Asset = ({ assets }) => {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  let obj = [
    { name: "Deposit", link: "" },
    { name: "Buy Crypto", link: "" },
    { name: "Withdraw", link: "" },
    { name: "Transfer", link: "" },
    { name: "MegaSwap", link: "" },
  ];
  return (
    <>
        <Layout  assets={assets}>
            <h1> EARN SECTIOn</h1>
        </Layout>
    </>
  );
};


export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/hello");

  let menu = await data.json();
  return {
    props: {
      assets: menu.specialNav.assets,
    }, // will be passed to the page component as props
  };
}

export default Asset;
