import { useState } from "react"
import "../../../css/ChoiceBar.css"
import "../../../css/app.css"
import { Link } from "react-router-dom"
const ChoiceBar=()=>{
  const [containers,setContainers]=useState([{container_id:1, container_name:"Je suis un particulier",font:"face"}
  ,{container_id:2,container_name:"Je suis un professionel",font:"storefront"},
  { container_id:3,container_name:"Je suis une association",font:"waving_hand"},
  {container_id:4, container_name:"Je suis un nouvel habitant"},
  {container_id:5, container_name:"Accès direct à un service"}])
    return(
     <div className="container-fluid whole_container">
          <div className="row">
             {containers.map((container,index)=><div key={index.toString()} className="col-md cont">
             <div className="row">
                <div className="col-md">
                <Link to={{
              pathname:"/mes-demarches",
              data:container.container_id
           }} style={{ textDecoration: 'none' }}>{container.container_name}</Link>
                </div>
                <span className="material-icons-outlined col-sm-2">{container.font}</span>

             </div>
             </div>)}
          
          </div>
     </div>
 
    )
}

export default ChoiceBar