// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import { promises as fs }  from 'fs'

export default async function handler(req, res) {
  
  let nav = await fs.readFile(process.cwd()+'/staticData/header-footer/nav.json',"utf8");
  let footerNav = await fs.readFile(process.cwd()+'/staticData/header-footer/footer.json',"utf8",{});
  let tutorials = await fs.readFile(process.cwd()+'/staticData/snippet/tutorials.json',"utf8",{});
  let counteryList = await fs.readFile(process.cwd()+'/staticData/countryList.json',"utf8",{});let specialNav = await fs.readFile(process.cwd()+'/staticData/header-footer/specialNav.json',"utf8",{});
 
  let coinList = await fs.readFile(process.cwd()+'/staticData/snippet/coins.json',"utf8",{});
  let currency = await fs.readFile(process.cwd()+'/staticData/snippet/currency.json',"utf8",{});

  res.status(200).json({
    nav : JSON.parse(nav),
    footerNav :JSON.parse(footerNav),
    tutorials :JSON.parse(tutorials),
    counteryList :JSON.parse(counteryList),
<<<<<<< HEAD
    specialNav :JSON.parse(specialNav)
=======
    coinList :JSON.parse(coinList),
    currency :JSON.parse(currency)
>>>>>>> 8d830f3d94161607e286850264173cad136c522c
  })
}
