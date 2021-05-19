import "../../../css/Cont.css"

import { Link, useParams } from "react-router-dom"

const Processes =({processes})=>{

     let {process} =useParams()
    return(
        <div className="">
        <h1 className="process_title" >Liste des démarches</h1>
  { processes.map((value,index)=>
  <ul  key ={index}id={"section"+index} className="section">
            <h3>{value!== undefined?value.subcontainer_name:""}</h3>
        { value!== undefined?value.processes.map((process,i)=><div key={i} >
         
          <li className="process_item">
          
      <Link  to={{
        pathname:"/demarche/"+process.process_name+"/demarche"
        ,name:process.process_name
        }} style={{height:"40px",display:"block", textDecoration:"none"}}>

          <div className="row"> 
               <div className="col-1  c">
                 <span className="material-icons-outlined " aria-hidden="true">chevron_right</span> 
               </div>
               <div className="col c ">
               <span className=""> {process.process_name}</span>
               </div>
          </div>
      </Link>
      
      </li>
        </div>):""}
    

  </ul>)}
  </div>
    )
}
export default Processes