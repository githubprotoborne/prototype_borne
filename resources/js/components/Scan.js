import { useEffect, useState } from "react"
import axios from "axios"
import Test from "./NavBar/Test";


const Scan = ()=>{
const [demarche,setDemarche]= useState([]);

let getDemarche =()=>{
    axios.get("/demarches")
       .then(
        (response )=> {
          setDemarche(response.data)
          alert(JSON.stringify(response.data))
     
        }
        )
       

}
useEffect(
    ()=>{
        getDemarche()
    },[]
 )
    return (
        <div className>
          
           {   demarche.length!==0?
               demarche[0].container_name:""
           }

        
        </div>
    )
}
export default Scan