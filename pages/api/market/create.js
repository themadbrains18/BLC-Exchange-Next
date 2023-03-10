import nc from "next-connect";
import {postData, getDataWithoutBody,getData} from "../../../libs/requestMethod";

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
 // create New users
 // ============================================================//
  .post(async (req, res) => {
    console.log(req.body,'=================')
    try {
      let data = await postData(`${process.env.NEXT_PUBLIC_APIURL}/market/create`, JSON.parse(req.body))
      res.status(200).send({data});
    } catch (error) {
      console.log(error)
       res.status(401).send({error: error})
    }
  })

  .get(async (req, res) => {
    try {
      let data = await getDataWithoutBody(`${process.env.NEXT_PUBLIC_APIURL}/market/${req.query.token}`)
      res.status(200).send({data});
    } catch (error) {
      console.log(error)
       res.status(401).send({error: error})
    }
  })
  .get(async (req, res) => {
    try {
      let data = await getData(`${process.env.NEXT_PUBLIC_BASEURL}/market/getOrder/${req.query.token}/${req.params.userid}`)
      res.status(200).send({data});
    } catch (error) {
      console.log(error)
       res.status(401).send({error: error})
    }
  })

export default handler;