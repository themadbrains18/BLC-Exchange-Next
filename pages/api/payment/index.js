import nc from 'next-connect'
import { getData } from '../../../libs/requestMethod'

import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  },
}

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found')
  },
}).get(async (req, res) => {
    try {
        let list = await fetch(process.env.NEXT_PUBLIC_APIURL + `/payment/list`) //api for the get request
          .then((response) => response.json())
         res.status(200).send(list)
    } catch (error) {
        res.status(401).send(error)        
    }
})

.post(async (req, res) => {
   
   let selectoken
   if(typeof  req.body === "string"){
     selectoken  = JSON.parse(req.body).selectoken;
   }else{
     selectoken = req.body.selectoken
   }
  
   const session = await getServerSession(req, res, authOptions)


   console.log(req.body)
  if (session != null) {

      let dd ={
        user_id :  session?.user?.id,
        pmid    :  selectoken?.id,
        status  :  "active",
        pm_name :  selectoken?.payment_method,
        pmObject : req.body,
        passcode : JSON.parse(req.body)?.passcode
      }

      try {
      
        let list = await fetch(process.env.NEXT_PUBLIC_APIURL + `/payment/add-method`,
        { 
          method: "POST",
          body : JSON.stringify(dd),
          headers: {
            "Content-Type": "application/json",
          }
        }).then(res => {return res.json()}) //api for the post request

        if(list.res == "success"){
          res.status(200).send(list)
        }else{
          res.status(401).send(list)
        }

      } catch (error) {
        res.status(401).send(err)
      }

  }else{
    res.status(401).send('Unauthorized')
  }
})

export default handler
