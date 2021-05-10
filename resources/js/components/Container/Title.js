

const Title =({className})=>{
    
    return(<div className=" container">
    <div className={"row "+className}>
      <div className="col-m-auto "> 
           <span className="container_title" >{sessionStorage.getItem("container_name")}</span>
     </div>
<div className="col ">
{sessionStorage.getItem("container_icon").split(",").map((icon, index)=>
<span  key={index} className="material-icons-outlined container_icon" aria-hidden="true">{icon}</span>
)}

</div>

</div>



   </div>)
    
}
export default Title