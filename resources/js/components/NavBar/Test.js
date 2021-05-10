import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../../../css/app.css"
import ScrollSpy from 'react-scrollspy-navigation';
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

 <div className="container">
   
<div  className="row">
 
 <div className="col"> 
   <section id="section-1">section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1
   
   </section>
   <section id="section-2">section 2 section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1section 1</section>
   <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section> <section id="section-3">section 3</section>
 </div>
<div className="col"></div>

</div>
   
 </div>
    )
}
export default Test