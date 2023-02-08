import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const Index = (props) => {

  // const [entry, setEntry] = useState([])

  // // https://api.publicapis.org/entries
  // useEffect(() => {
  //   ; (async () => {
  //     let data = await fetch('https://api.publicapis.org/entries')           //api for the get request
  //       .then(response => response.json())
  //       .then(data => setEntry(data.entries));
  //   })().catch((err) => {
  //     console.error(err)

  //   })
  // },[])


  const { slug } = useRouter().query;

  return (
    <>
      <h1>mraket : {slug} {props.title}</h1>

      <table>
        <thead>
            <th>API</th>
            <th>Auth</th>
            <th>Category</th>
            <th>Cors</th>
            <th>Description</th>
            <th>HTTPS</th>
            <th>Link</th>
        </thead>
        <tbody>
           { props.entries.map((ent , intEnt ) => {

            return (<>
                <tr key={intEnt}>
                    <td>{ent.API}</td>
                    <td>{ent.Auth}</td>
                    <td>{ent.Category}</td>
                    <td>{ent.Cors}</td>
                    <td>{ent.Description}</td>
                    <td>{ent.HTTPS}</td>
                    <td>{ent.Link}</td>
                </tr>
            </>)

           })
           }
            
        </tbody>
      </table>
    </>
  )
}


export async function getServerSideProps(context) {

  let data = await fetch('https://api.publicapis.org/entries')           //api for the get request
  .then(response => response.json())
  .then(data => {
      return data.entries
  }  );

  return {
    props: {
      title: 'i am here',
      entries : data
    }, // will be passed to the page component as props
  }
}



export default Index