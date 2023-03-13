import nc from "next-connect";
import { getDataWithoutBody, postData,deleteMethod } from "../../../libs/requestMethod";

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
    // kyc register
    // ============================================================//

    .post(async (req, res) => {

        try {
            let data = await postData(`${process.env.NEXT_PUBLIC_APIURL}/order/create`, JSON.parse(req.body))
            res.status(200).send({ data });
        } catch (error) {
            console.log(error)
            res.status(401).send({ error: error })
        }
    })

    .get(async (req, res) => {
        try {
            let data = await getDataWithoutBody(`${process.env.NEXT_PUBLIC_APIURL}/order/order/${req.query.orderid}`)

            res.status(200).send({ data });
        } catch (error) {
            console.log(error)
            res.status(401).send({ error: error })
        }
    })

    .delete(async (req,res) =>{
        console.log(req.query.postid,'====delete post id')
        try {
            let data = await deleteMethod(`${process.env.NEXT_PUBLIC_APIURL}/post/delete/${req.query.postid}`)

            res.status(200).send({ data });
        } catch (error) {
            console.log(error)
            res.status(401).send({ error: error })
        }
    })

export default handler;