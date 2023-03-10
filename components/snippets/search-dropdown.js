import { Fragment, useState, useEffect } from "react";
const SearchDropdown = ({
  country,
  code,
  setShowDropdown,
  setDropdownPhone,
  setCountryName,
  setCurrencyList,
  coin,
  currency,
  idData,
  selectId,
  selectCoin,
  setDialCode,
  tokens,
  selectBank, bank,selectedCountry

}) => {
  // const[showDropdown,setShowDropdown] = useState(false);
  // const[DropdownPhone,setDropdownPhone] = useState(false);

  const [Data, setData] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [countryList, setCountryList] = useState([]);
  let [BanksList, setBanksList] = useState([]);

  useEffect(() => {
    (async () => {

      await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello")
        .then((res) => res.json())
        .then((data) => {
          setData(data.counteryList);
          setCurrencyData(data.currency);
          setCountryList(data.counteryList);
          setBanksList(data.banksList);
          /* process your data further */
        })
        .catch((error) => console.error(error));

      let tokenList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/token`, {
        method: "GET"
      }).then(response => response.json());

      setCoinData(tokenList.data);

    })().catch((err) => {
      console.log(err);
    });
  }, []);

  const handleChange = (e) => {
    let search = e.target.value;
    let obj = countryList.filter(function handleClick(obj) {
      return obj.country.toLowerCase().includes(search.toLowerCase());
    });
    setData(obj);
  };

  const selectCounteryName = (event,code) => {
    // let countryName = document.querySelector("#countryName");
    let SelectedValue = event.target.innerHTML;
    setShowDropdown(false);
    // countryName.innerHTML = SelectedValue;
    setCountryName(SelectedValue);
    if(selectedCountry !== undefined ){
      selectedCountry(SelectedValue);
    }
    if(setDialCode !=undefined){
      setDialCode(code)
    }
    
  };
  const selectCounteryCode = (event) => {
    let countryCode = document.querySelector("#counteryCode span");
    let SelectedValue =
      event.currentTarget.querySelector("#codeValue").innerHTML;
    setDropdownPhone(false);
    countryCode.innerHTML = SelectedValue;
    setDialCode(SelectedValue)
  };

  return (
    <>
      <div className="bg-white dark:bg-black-v-5 animate-bottom duration-500 absolute top-[100%]  left-0 w-full border border-grey max-h-[350px] overflow-auto z-10">
        <div
          className={`p-4 sticky top-0 left-0 w-full bg-white dark:bg-black-v-5 ${idData ? "hidden" : "block"
            }`}
        >
          <input
            type="search"
            placeholder="search"
            className="block  px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[40px] text-black dark:text-white outline-none focus:!border-primary"
            name="search"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <ul>
          {Data.length > 0 &&
            Data.map((e, i) => {
              return (
                <Fragment key={i}>
                  {country && (
                    <li
                      className="cursor-pointer info-14 !text-black dark:!text-white px-4 hover:bg-[#cccccc1f]"
                      onClick={(event) => {
                        selectCounteryName(event, e.code);
                      }}
                    >
                      {e.country}
                    </li>
                  )}
                  {code && (
                    <li
                      className="cursor-pointer info-14 !text-black dark:!text-white px-4 hover:bg-[#cccccc1f]"
                      onClick={(event) => {
                        selectCounteryCode(event);
                      }}
                    >
                      <span>{e.country}</span>&nbsp;
                      <span>
                        ( <span id="codeValue">{e.code}</span> )
                      </span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          {coinData.length > 0 &&
            coinData.map((e, i) => {
              return (
                <Fragment key={i}>
                  {coin && (
                    <li
                      className="cursor-pointer info-14 !text-black flex gap-2 p-3 dark:!text-white px-4 hover:bg-[#cccccc1f]"
                      onClick={() => {
                        selectCoin(e), setShowDropdown(false);
                      }}
                    >
                      <img
                        src={`${e.image}`}
                        className="max-w-[24px] w-full h-auto rounded-full"
                      ></img>
                      <span>{e.symbol}</span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          {currencyData.length > 0 &&
            currencyData.map((e, i) => {
              return (
                <Fragment key={i}>
                  {currency && (
                    <li className="cursor-pointer info-14 !text-black flex gap-2 p-3 dark:!text-white px-4 hover:bg-[#cccccc1f]">
                      <span>{e.name}</span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          {idData &&
            idData.map((e, i) => {
              return (
                <Fragment key={i}>
                  {
                    <li
                      className="cursor-pointer info-14 !text-black flex gap-2 p-3 dark:!text-white px-4 hover:bg-[#cccccc1f]"
                      onClick={() => {
                        selectId(e);
                        setShowDropdown(false);
                      }}
                    >
                      <span>{e}</span>
                    </li>
                  }
                </Fragment>
              );
            })}

          {BanksList &&
            BanksList.map((e, i) => {
              return (
                <Fragment key={i}>
                  {bank && (
                    <li
                      className="cursor-pointer info-14 !text-black flex gap-2 p-3 dark:!text-white px-4 hover:bg-[#cccccc1f]"
                      onClick={() => {
                        selectBank(e), setShowDropdown(false);
                      }}
                    >
                      <img
                        src={`/assets/images/${e.image}`}
                        className="max-w-[24px] w-full h-auto"
                      ></img>
                      <span>{e.name}</span>
                    </li>
                  )}
                </Fragment>
              );
            })}
        </ul>
      </div>
    </>
  );
};

// // This gets called on every request
// SearchDropdown.getInitialProps = async (ctx) => {
//   const res = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
//   const JsonData = await res.json();
//   // console.log(ctx+"===========")

export default SearchDropdown;