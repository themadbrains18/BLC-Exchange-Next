// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import fs from 'fs'

export default function handler(req, res) {
  const data = fs.readFileSync(process.cwd()+'/staticData/nav.json',"utf8");
  res.status(200).json(JSON.parse(data))
}
