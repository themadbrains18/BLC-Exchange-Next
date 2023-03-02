import nc from 'next-connect'
import fileUpload from "../../../libs/fileUploads"
import multer from 'multer'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"


import { getProviders } from "next-auth/react"
import fs from 'fs'
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "../auth/[...nextauth]"


export const config = {
  api: {
    bodyParser: false,
  },
}


const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .post(async (req, res) => {
    const session = await getServerSession(req, res, authOptions)
    if (session != null) {

      // ================================================================ //
      // file upload handler
      // ================================================================ // 
      let userID = session.user.id;
      const upload = fileUpload('/kyc', userID).fields([{
        name: 'idfront', maxCount: 1
      },
      {
        name: 'idback', maxCount: 1
      },
      {
        name: 'statement', maxCount: 1
      }

      ])

      upload(req, res, function (err) {
        if (req.errortype) {
          // A Multer error occurred when uploading.
          res.status(400).send({ message: req.errortype, status: 400 })
        } else if (err) {
          console.log(err)
          res.status(400).send({ message: req.errortype, status: 400 })
          // An unknown error occurred when uploading.
        }
        else {
          res.status(200).send({ 'message': 'file upload successfully...', data: req.name, status: 200 })
        }
        // working fine
        console.log(req.name)
        console.log(req.fileuserid)

      })

      // ================================================================ //
      // file upload handler
      // ================================================================ // 

    } else {
      res.status(401).send('Opps! You are not authorized to access this application')
    }
  })
  .delete(async(req,res)=>{
    console.log("======request", req)
  })


export default handler;
