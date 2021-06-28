import React, { useEffect, useState } from "react"
import "../../../css/ChoiceBar.css"
import { Link } from "react-router-dom"
import axios from "axios"

// Je choisi mon profil component
class ChoiceBar extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         containers: [],
        

      }
   }

   //get container items from the database
   async getContainers() {
      await axios.get("/first-containers")
         .then((response) => {
            // extract the 4 first item from the response array

            this.setState({ containers: response.data.slice(0, 3) })
         })
   }
   // handle search submit
   handleSearch() {
      //to do
   }
   componentDidMount() {
      this.getContainers.bind(this)()
   }
   render() {

      return (
         <div className="container-fluid" id="choiseBar">
            <div className="row  whole_container" >

               {///////////////////////////// dites nous qui vous etes
               }
               <div className="col  profil"  id="tablet-profil">
                  <p className="profil-text">Je choisis mon profil</p>
               </div>

               {
                  /////////////////////////////
               }

               {this.state.containers.length !== 0 ? this.state.containers.map((container, index) =>


                  <Link key={index.toString()} className="col-md cont category_button_choiceBar"  id={"tablet-pro"+index} to={{
                     pathname: "/sous-categories/" + container.container_id + "/" + container.container_name,
                     // pass data through react -router
                     id: container.container_id,
                     name: container.container_name,
                     icon: container.container_icon
                  }} style={{   display: "inline-flex", textAlign: "center", textJustify: "center", alignItems: "center" }}><span className="choisebar_process_name">{container.container_name}</span></Link>

               ) : ""}

            

                 <div className="col  profil"  id="tablet-profil">
                  <p className="profil-text">J'accède directement à un site ou une démarche</p>
               </div>

              

               {
                  ///////////////////////////////// accès direct à une démarche
               }

               <Link className="category_button_choiceBar services  cont col-md" to={{
                  pathname: "/mes-demarches/",
                  // pass data through react -router

               }} >
                  <span className="service-title">Site d'une administration</span>
                  <span className="service-subtitle">Pôle emploi, caf, La poste</span>
               </Link>


               <div className="col-md">

                  <form className=" row search">
                     <input type="text col" placeholder="Je cherche une demarche" className="col search_input"></input>
                     
                        <span className="material-icons-outlined col-1 search_icon" >search</span>
                     
                  </form>
               </div>

            </div>
         </div>
      )

   }
}

export default ChoiceBar