import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const OrderTable = ({ session }) => {

  const router = useRouter()

  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    getUserOrders();
  }, [])

  const getUserOrders = async () => {
    let orders = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/order/list?userid=${session.user.id}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())

    console.log(orders,'========user order');

    if (orders.data.status === 200) {
      setUserOrder(orders.data.data);
    }
  }


  return (
    <>
      <div className="overflow-x-auto table_box  ">
        <div className="table mt-4 w-max md:w-full border border-border-clr rounded-sm ">
          <div
            className={`head_row bg-table-bg grid grid-cols-7 gap-4  border-b border-border-clr dark:bg-black-v-4 `}
          >
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Token</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Amount/Price</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Amount </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Order Number</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Status</h4>
          </div>
          {userOrder && userOrder.length > 0 ? (
            <div>
              {userOrder.map((item) => {
                return <div className="row grid bg-white grid-cols-7 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1" onClick={()=>{localStorage.setItem("orderid", item.id); router.push(`/p2p-trade/order/${item.id}`)}}>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.token_id}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.price}/{item.spend_amount}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.receive_amount}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.id}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.isReleased === true?'Completed':item.isCompleted === true?'Release Pending':item.inProcess ===true?'Payment Pending':'Cancelled'}</h4>
                </div>
              })}

            </div>
          ) : (
            <div className="xl:grid xl:place-content-center w-full p-4">
              <div className="inline-grid">
                <Image
                  src={"/assets/icons/noData.svg"}
                  alt="No Data"
                  className=""
                  height={200}
                  width={200}
                />
                <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                  No Data
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OrderTable;