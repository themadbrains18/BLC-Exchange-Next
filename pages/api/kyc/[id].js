import nc from "next-connect";


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

.get(async (req, res) => {
    try {
      let data = await getData(`${process.env.NEXT_PUBLIC_APIURL}/kyc/${req.params.id}`)
      res.status(200).send({data});
    } catch (error) {

       res.status(401).send({error: error})
    }
  })
export default handler;