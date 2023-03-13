import React, { useEffect, useState } from 'react'
import OrderSec from "components/oneClickBuy/order-sec";
import SellerOrderSec from 'components/oneClickBuy/seller-order-sec';
import { useRouter } from "next/router";
import { getSession } from 'next-auth/react'
import { io } from "socket.io-client"

const Order = ({ sessions }) => {

  const { slug } = useRouter().query
  const [order, setOrderDetail] = useState(null)

  useEffect(() => {
    getOrderDetailById();
    const socket = io("http://localhost:5000", { transports: ['websocket'] });
    socket.connect();
    socket.on('order', function (msg) {
      setOrderDetail(msg.data[0][0])
    });
  }, []);

  const getOrderDetailById = async () => {

    let orderid = localStorage.getItem("orderid");
    let data = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/order/create?orderid=${orderid}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())

    if (data) {
      data.data[0].p_method[0].pmObject = JSON.parse(data.data[0].p_method[0].pmObject);
      setOrderDetail(data.data[0])
    }

  }


  return (
    <>
      {order !== undefined && order !== null && order &&

        <>
          {order?.buy_user_id === sessions?.user?.id ? <OrderSec order={order} /> : <SellerOrderSec order={order} />}
        </>

      }

    </>
  )
}

export default Order;

export async function getServerSideProps(context) {
  let session = await getSession(context)
  if (session != null) {
    return {
      props: {
        sessions: session
      }
    }
  }

  return {
    redirect: { destination: '/' },
  }

}