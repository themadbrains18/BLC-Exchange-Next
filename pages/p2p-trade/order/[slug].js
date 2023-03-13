import React from 'react'
import OrderSec from "components/oneClickBuy/order-sec";
import { useRouter } from "next/router";

const Order = () => {

  const { slug } = useRouter().query

  console.log(slug,'page slug=====');

  return (
    <>
      <OrderSec slug={slug} />
    </>
  )
}

export default Order;