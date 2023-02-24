import { toast } from 'react-toastify';
import { signOut } from "next-auth/react";


const otpMatch = async (obj) => {
  let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/match`, {
      method: "POST",
      body: JSON.stringify(obj)
  }).then(response => response.json());

  if (result.data.status === 200 && result.data != undefined) {
      return result.data;
  }
  else {
      return result.data;
  }
}


const updateUserSecurity = async(obj,bindGoogle)=>{
  let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users`, {
    method: "PUT",
    body: JSON.stringify(obj)
  }).then(response => response.json());

  if (result.data.status === 200 && result.data != undefined) {
    if(bindGoogle === true){
      signOut();
    }
    else{
      return result.data
    }
  }
  else {
    return result.data
  }
}

module.exports = {
  otpMatch,
  updateUserSecurity
}