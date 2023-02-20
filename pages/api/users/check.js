import nc from "next-connect";
import {postData} from "../../../libs/requestMethod";

export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  }
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

  // ============================================================//
 // check user if already register
 // ============================================================//

  .post(async (req, res) => {
    try {
      let data = await postData(`${process.env.NEXT_PUBLIC_APIURL}/users`, JSON.parse(req.body) )
      res.status(200).send({data});
    } catch (error) {
      console.log(error)
       res.status(401).send({error: error})
    }
  })

export default handler;