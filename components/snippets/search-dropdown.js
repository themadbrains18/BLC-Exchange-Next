import {Fragment,useState,useEffect} from 'react'
const SearchDropdown = ({country,code,setShowDropdown,setDropdownPhone}) => {
    // const[showDropdown,setShowDropdown] = useState(false);
    // const[DropdownPhone,setDropdownPhone] = useState(false);

    const [Data, setData] = useState([]);

    useEffect(() => {
      (async () => {
        await fetch("/api/hello")
          .then((res) => res.json())
          .then((data) => {
            setData(data.counteryList);
            /* process your data further */
          })
          .catch((error) => console.error(error));
      })().catch((err) => {
        console.log(err);
      });
    }, []);

    const selectCounteryName = (event)=>{
        let countryName = document.querySelector("#countryName");
        let SelectedValue = event.target.innerHTML;
        setShowDropdown(false);
        countryName.innerHTML = SelectedValue;
    }
    const selectCounteryCode = (event) =>{
        let countryCode = document.querySelector("#counteryCode span");
        let SelectedValue = event.currentTarget.querySelector("#codeValue").innerHTML;
        console.log(SelectedValue);
        setDropdownPhone(false);
        countryCode.innerHTML = SelectedValue;
    }
  

    
  return (
    <>
        <div className='bg-white dark:bg-black-v-5 absolute top-[100%] left-0 w-full border border-grey max-h-[350px] overflow-auto z-10'>
            <div className="p-2 sticky top-0 left-0 w-full bg-white dark:bg-black-v-5">
                <input type="search" placeholder="search" className="block  px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[40px] text-black dark:text-white outline-none focus:!border-primary" name="search" />
            </div>
            <ul>
            { Data.length > 0 && 
                    Data.map((e,i)=>{
                        
                        return(
                            <Fragment key={i}>
                                {
                                    country && 
                                    <li className="cursor-pointer info-14 !text-black dark:!text-white px-4 hover:bg-[#cccccc1f]" onClick={(event)=>{selectCounteryName(event)}}>{e.country}</li>
                                }
                                {
                                    code &&
                                    <li className="cursor-pointer info-14 !text-black dark:!text-white px-4 hover:bg-[#cccccc1f]" onClick={(event)=>{selectCounteryCode(event)}}>
                                        <span>{e.country}</span>&nbsp;
                                        <span>( <span id="codeValue">{e.code}</span> )</span>
                                    </li>
                                }
                            </Fragment>
                        )
                        
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default SearchDropdown;