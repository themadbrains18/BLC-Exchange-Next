import React, { useContext, useEffect, useState } from "react";
import Context from "/components/contexts/context";

const PaymentMethodModal = ({ setPaymentMethodModal, userpaymentods , selectedMethod, userSelectedPMethod }) => {
    const { mode, setClick } = useContext(Context);

    const [selectedPayMethod, setSelectedPaymethod] = useState([]);
    const [isSelected, setIsSelected]= useState(false);

    useEffect(()=>{
        if(userSelectedPMethod.length>0){
            setIsSelected(true)
        }
    },[])

    const setSeletedPaymentMethod = (item) => {
        let obj = selectedPayMethod.filter(a => a.pm_name === item.pm_name);

        // let oldarray = userSelectedPMethod.filter(a => a.pm_name === item.pm_name); 
        // if(oldarray.length>0){
        //     userSelectedPMethod = userSelectedPMethod.filter(e => e.pm_name !== item.pm_name);
        // }
        // else{
        //     userSelectedPMethod.push(item);
        // }

        let array = selectedPayMethod;
        if (obj.length > 0) {
            let newArray = selectedPayMethod.filter(e => e.pm_name !== item.pm_name)
            array = newArray;
            setSelectedPaymethod(newArray);
        }
        else {
            array.push(item);
            setSelectedPaymethod(array);
        }

        if(array.length>0){
            setIsSelected(true)
        }
        else{setIsSelected(false)}
    }


    return (
        <div className={`opacity-1 visible rounded-md fixed top-[50%]  duration-300 z-[20] left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%]  dark:bg-black-v-4 bg-white p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto`}>
            <div className="max-w-[20px] mb-[15px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); setPaymentMethodModal(false) }}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                    <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                    c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                    l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
            </div>
            <div className="mt-[40px]">
            {/* checked={userSelectedPMethod.findIndex(a => a.pm_name === item.pm_name) > -1 ? 'checked' : ''} */}
                {userpaymentods && userpaymentods.length > 0 && userpaymentods.map((item,index) => {
              
                    // let check = userSelectedPMethod.findIndex(a => a.pm_name === item.pm_name) == "-1" ? false  : true;
                    // console.log(check,'==============check'); 
                    return <div className="relative mb-[10px] inline-block  w-full rounded-md cta--modifier" >
                        <input id={index} 
                        // checked={check ? 'checked' : ''}
                        name={item.pm_name} type="checkbox" className="hidden agree_cta font-noto " 
                         onChange={(e) => {
                            setSeletedPaymentMethod(item)
                            }} />
                        <label htmlFor={index} className="p-[15px] rounded-md  mb-[8px]  info-14-16  relative block pl-[25px] after:rounded-md after:absolute after:top-[2px] after:left-0 after:border after:border-grey after:w-full after:h-full cursor-pointer"><span className="block z-[99] relative">{item.pm_name}</span> </label>
                    </div>
                })}

            </div>
            <div className="text-end">
                <div className={`text-end  inline-block ${isSelected === false ?'cursor-not-allowed' : ''}  */}`}>
                    <button className={`cta !leading-[34px] ${isSelected === false ?'opacity-[0.5] pointer-events-none' : ''} */} `} onClick={()=>{selectedMethod(selectedPayMethod);setClick(false); setPaymentMethodModal(false)}}>Apply</button>
                
                </div>
            </div>
        </div>
    )
}

export default PaymentMethodModal;