import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../../../css/app.css"

const Test =()=>{
  const [categories,setCategories]=useState([{container_name:"Je suis un particulier",font:"face"}
,{container_name:"Je suis un professionel",font:"storefront"},
{container_name:"Je suis une association",font:"waving_hand"},
{container_name:"Je suis un nouvel habitant"},
{container_name:"Accès direct à un service"}])
const [demarches,setdemarche]=useState();


const getDemarche=()=>{
  axios.get("/demarches",{ params: { id:1} })
  .then ((response)=>{
    
    console.log(response.data)
  })
}
useEffect(
  ()=>{
    getDemarche()
  },[]
)
    return(

 <div>
   <Link to={{
     pathname:"/test",
     data:"donnée"
   }}>demarche</Link>
 </div>
    )
}
export default Test