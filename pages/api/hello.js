// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import { promises as fs }  from 'fs'

export default async function handler(req, res) {
  
  const nav = await fs.readFile(process.cwd()+'/staticData/header-footer/nav.json',"utf8");
  const footerNav = await fs.readFile(process.cwd()+'/staticData/header-footer/footer.json',"utf8",{});

  res.status(200).json({
    nav : JSON.parse(nav),
    footerNav :JSON.parse(footerNav)
  })
}
