import Image from "next/image";
import React, { useEffect, useState ,useContext } from "react";
import SelectMenu from "components/snippets/selectMenu";
import Context from "/components/contexts/context";
import Myordertable from "./myorder-table";
import { useRouter } from "next/router";

const OrderTable = ({ session }) => {
  let coinDataList = ["All types","Buy","Sell"];
  let coinDataList2 = ["All Status","Pending Payment","Pending Reciept","Pending Release","Completed","cancelled","under appeal"];
  const [activeTab,setActiveTab] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const { mode, setClick } = useContext(Context);

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

      <div className="flex items-center gap-[10px] sm:gap-[25px] mb-[24px]">
        <button className={`info-12 !text-base border-b pb-[5px] ${activeTab === 1 ? "dark:!text-white !text-black border-primary":"border-transparent"}`} onClick={()=>{setActiveTab(1)}}>All</button>
        <button className={`info-12 !text-base border-b pb-[5px] ${activeTab === 2 ? "dark:!text-white !text-black border-primary":"border-transparent"}`} onClick={()=>{setActiveTab(2)}}>Completed</button>
        <button className={`info-12 !text-base border-b pb-[5px] ${activeTab === 3 ? "dark:!text-white !text-black border-primary":"border-transparent"}`} onClick={()=>{setActiveTab(3)}}>Cancelled</button>
        <button className={`info-12 !text-base border-b pb-[5px] ${activeTab === 4 ? "dark:!text-white !text-black border-primary":"border-transparent"}`} onClick={()=>{setActiveTab(4)}}>In progress</button>
      </div>
      <div className="flex lg:justify-between lg:hidden ml-[auto] mb-[20px] justify-end	" >
        <svg onClick={() => { setShowDropdown(true) }} className="max-w-[32px] w-full " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210.68 210.68" style={{ enableBackground: 'new 0 0 210.68 210.68' }} xmlSpace="preserve">
          <path fill={mode === "dark" ? "white" : "currentcolor"} d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0
                  C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23
                  c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863
                  c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767
                  C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926
                  c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62
                  c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486
                  c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938
                  C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z" />
        </svg>
      </div>
      <div className={` items-center gap-[20px]  lg:flex hidden ${showDropdown ? "p-[20px] !block fixed top-[0] left-[0] dark:bg-black-v-3 bg-white z-[9] w-full h-full flex-col":""}`}>
          <svg onClick={() => { setShowDropdown(false) }} className="lg:hidden max-w-[24px] w-full ml-[auto] !mb-[30px]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
            <path fill={mode === "dark" ? "#fff" : "#000"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                    c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                    l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    C61.42,57.647,61.42,54.687,59.595,52.861z" />
          </svg>
        <div className={` flex  gap-3 h-[40px]  px-1 border border-border-clr dark:bg-black-v-4 mb-[20px]`}>
          <input
            type="date"
            className="font-noto focus:outline-none bg-transparent  dark:text-white"
          />
          <input
            type="date"
            className="font-noto focus:outline-none bg-transparent dark:text-white "
          />
        </div>
        <div className="mb-[20px]">
        <input type="text" name="orderNumber"  placeholder="Enter your order number" className="block font-noto  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white  min-h-[40px] text-black dark:text-white outline-none focus:!border-primary" />
        </div>
        <div className="border border-border-clr mb-[20px]">
          <SelectMenu selectMenu={coinDataList} font12={true} />
        </div>
        <div className="border border-border-clr mb-[20px]">
          <SelectMenu selectMenu={coinDataList2} />
        </div>
        <button className="cta mb-[20px] md:mr-[0px] mr-[15px]">Search</button>
        <button className="cta2 mb-[20px]">Export</button>
      </div>

      {
        activeTab === 1 &&
      <> 
        <Myordertable />
      </>
      }
      {
        activeTab === 2 &&
      <> 
        <Myordertable />
      </>
      }{
        activeTab === 3 &&
      <> 
        <Myordertable />
      </>
      }{
        activeTab === 4 &&
      <> 
        <Myordertable />
      </>
      }
    </>
  )
}

export default OrderTable;