import React, { useEffect, useState } from "react"
import "../../../css/ChoiceBar.css"

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

  
 //get container items from the database
     async getContainers (){
    await axios.get("/first-containers")
   .then((response)=>{
      // extract the 4 first item from the response array
   
       this.setState({containers: response.data.slice(0,4)})
   })}
   // handle search submit
    handleSearch (){
       //to do
    }
  componentDidMount(){
     this.getContainers.bind(this)()
  }
   render(){

    return(
      <div className="container-fluid whole_container" id="choiseBar">
      <div className="row" >

         {///////////////////////////// dites nous qui vous etes
         }
            <div className="col profil">
             <p className="profil-text">Dites nous qui vous êtes</p>
            </div>

         {
            /////////////////////////////
         }
       
       {this.state.containers.length!==0? this.state.containers.map((container,index)=><div key={index.toString()} className="col-md cont">
         <div className="row category_button_choiceBar">
            <div className=" ">
            <Link to={{
          pathname:"/sous-categories/"+container.container_id+"/"+container.container_name,
          // pass data through react -router
          id:container.container_id,
          name:container.container_name,
          icon:container.container_icon
       }} style={{ textDecoration: 'none',marginLeft:'15px'}}>{container.container_name}</Link>
            </div>
        
         </div>
         </div>):""}

         {
            /////////////////////////////////
         }
         <div  className="col-md cont">
         <div className="row category_button_choiceBar">
            <div className=" ">
            <Link to={{
          pathname:"/mes-demarches/",
          // pass data through react -router
         
       }} style={{ textDecoration: 'none',marginLeft:'15px'}}>
          <span className="service-title">Accès direct à un service</span>
          <span className="service-subtitle">Pôle emploi, caf, La poste</span>
          </Link>
            </div>
        
         </div>
         </div>
           <div className="col search">
              <form className="row">
                    <input type="text" placeholder="Je cherche une demarche" className="col search_input"></input>
                   <button type="submit" className='search_submit_button col-2'>
                   <span className="material-icons-outlined search_icon" >search</span>
                   </button>
              </form>
               
           </div>
      
      </div>
 </div>
         
    )
         
    }
   }

export default ChoiceBar