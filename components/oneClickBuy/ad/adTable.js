import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteModal from "components/snippets/deleteModal";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdTable = ({session}) => {

  const [del_request_popup, setDel_Request_Popup] = useState(false);
  const [postid, setPostid] = useState(0);

  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    getUserPosts();
  }, [])

  const getUserPosts = async () => {
    let posts = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/post/userpost?userid=${session.user.id}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())

    if (posts.data) {
      setUserPost(posts.data);
    }
  }

  const deleteItem = async () => {
    let posts = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/post/create?postid=${postid}`,
      {
        method: 'DELETE',
      },
    ).then((response) => response.json())

    console.log(posts, '===after removed post');
    if (posts.data.status === 200) {

      let record = userPost.filter((item) => {
        return item.id !== postid;
      })

      setUserPost(record);

      setDel_Request_Popup(false);

      toast.success(posts.data.message, {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
    }
    else {
      toast.error('error', {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
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
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Price</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Quantity </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Min Limit</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Max Limit</h4>
            {/* <h4 className="head_col p-3 info-12 text-base dark:text-white">Payment deadline</h4> */}
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Payment Method</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Action</h4>
          </div>
          {userPost && userPost.length > 0 ? (
            <div>
              {userPost.map((item) => {
                return <div className="row grid bg-white grid-cols-7 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1">
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.symbol}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.price}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.quantity}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.min_limit}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.max_limit}</h4>
                  {/* <h4 className="col info-12  p-3 text-black dark:text-white"> {item.payment_time}</h4> */}
                  <h4 className="col info-12  p-3 text-black dark:text-white"> {item.p_method[0].pm_name}</h4>
                  <h4 className="col info-12  p-3 text-black dark:text-white ">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      width={24}
                      height={24} onClick={() => { setDel_Request_Popup(true); setPostid(item.id) }}
                    >
                      <path
                        fill={"red"}
                        className="cls-1"
                        d="M17.66229,21.88486,63.3847,30.82574l45.72241,8.94088a1.559,1.559,0,0,0,1.82788-1.22994A10.15176,10.15176,0,0,0,102.9192,26.6239l-15.172-2.96684.79656-4.07352A11.10952,11.10952,0,0,0,79.7827,6.56318L57.33412,2.17343A11.1096,11.1096,0,0,0,44.31375,10.9345L43.51718,15.008l-15.172-2.96685A10.15176,10.15176,0,0,0,16.43235,20.057a1.559,1.559,0,0,0,1.22994,1.82788ZM60.0674,9.82374,74.369,12.62036a8.2641,8.2641,0,0,1,6.5245,9.69647h0l-15.2613-2.9843L50.37093,16.34825h0A8.2641,8.2641,0,0,1,60.0674,9.82374Z"
                      />
                      <path
                        fill={"red"}
                        className="cls-2"
                        d="M110.58839,47.36161H17.41161a1.559,1.559,0,0,0-1.55785,1.55785v5.90918c0,.85949,16.14275,61.05238,16.14275,61.05238a11.08149,11.08149,0,0,0,11.03938,10.153H84.96412A11.08149,11.08149,0,0,0,96.0035,115.881s16.14275-60.19289,16.14275-61.05238V48.91946A1.559,1.559,0,0,0,110.58839,47.36161Zm-61.934,64.2194a2.60793,2.60793,0,0,1-3.19666-1.84821c-4.44239-16.61345-8.95983-33.53068-11.91535-44.72956a2.61069,2.61069,0,1,1,5.04851-1.33243c2.95407,11.19159,7.47077,28.10409,11.911,44.71353A2.61043,2.61043,0,0,1,48.65435,111.581Zm17.95316-2.52243a2.61095,2.61095,0,0,1-5.22189,0V64.337a2.61095,2.61095,0,0,1,5.22189,0ZM94.45735,65.00325C91.3685,76.70879,86.46715,95.05644,82.542,109.73317a2.61073,2.61073,0,1,1-5.04414-1.34918c3.9237-14.67272,8.8236-33.01491,11.911-44.71316a2.61069,2.61069,0,1,1,5.04851,1.33243Z"
                      />
                    </svg>
                  </h4>
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
      <DeleteModal del_request_popup={del_request_popup} setDel_Request_Popup={setDel_Request_Popup} title={"Are you sure to delete the sell Ad?"} deleteItem={deleteItem} />
    </>
  )
}

export default AdTable