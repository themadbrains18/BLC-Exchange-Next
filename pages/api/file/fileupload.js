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
})
  .use(fileUpload('/kyc').fields([{
    name: 'idfront', maxCount: 1
  }, {
    name: 'idback', maxCount: 1
  }]))

  .post((req, res) => {
    try {
      if(!req.errortype ){

        res.status(200).send({ 'message': 'file upload successfully...', data: req.name, status: 200 })
      }
      else{
        res.status(400).send({ message: 'Only .png, .jpg and .jpeg format allowed!', status: 400 })
      }
    }
    catch(error) {
      console.log("=error",error)
      
    }

  })



export default handler;
