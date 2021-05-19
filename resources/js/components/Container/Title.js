

const Title =({className})=>{
    
    return(<div className="">
    <div className={"row "}>
      <div className="col-sm-auto "> 
          <div className="">
          <h1 className="container_title" >{sessionStorage.getItem("container_name")}</h1>
          </div>
     </div>
   { <div className="col-sm-auto">
      
       {sessionStorage.getItem("container_icon").split(",").map((icon, index)=>
     <span key={index} className="material-icons-outlined icon-title" aria-hidden="true">{icon}</span>
    )}

       
   
</div> }

</div>



   </div>)
    
}
export default Title