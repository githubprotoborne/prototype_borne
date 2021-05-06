import React, { useEffect, useState } from "react"
import "../../../css/ChoiceBar.css"
import "../../../css/app.css"
import { Link } from "react-router-dom"
import axios from "axios"
class ChoiceBar extends React.Component{
   constructor(props){
      super(props)
      this.state={
         containers:[],
         services:[{container_id:5, container_name:"Accès direct à un service"}]

      }
   }

  
 
     async getContainers (){
    await axios.get("/first-containers")
   .then((response)=>{
     
       this.setState({containers: response.data.slice(0,4)})
   })}
  componentDidMount(){
     this.getContainers.bind(this)()
  }
   render(){

    return(
      <div className="container-fluid whole_container">
      <div className="row">
       
       {this.state.containers.length!==0? this.state.containers.map((container,index)=><div key={index.toString()} className="col-md cont">
         <div className="row">
            <div className="col-md">
            <Link to={{
          pathname:"/mes-demarches",
          id:container.container_id
       }} style={{ textDecoration: 'none' }}>{container.container_name}</Link>
            </div>
            <span className="material-icons-outlined col-sm-2">{container.container_icon}</span>

         </div>
         </div>):""}
         <div  className="col-md cont">
         <div className="row">
            <div className="col-md">
            <Link to={{
          pathname:"/mes-services",
          data:this.state.services[0].container_id
       }} style={{ textDecoration: 'none' }}>{this.state.services[0].container_name}</Link>
            </div>
            <span className="material-icons-outlined col-sm-2">{this.state.services[0].container_icon}</span>

         </div>
         </div>
      
      </div>
 </div>
         
    )
         
    }
   }

export default ChoiceBar