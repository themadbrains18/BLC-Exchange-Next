import nc from 'next-connect'
import fileUpload from "../../../libs/fileUploads"


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
  }).use(fileUpload('/kyc' ).single('test'))

  .post((rq,res) => {

    res.status(200).send({'status': 'file upload successfully...'})

  })
  


  export default handler;
