import { useState } from "react"
import "../../../css/app.css"

const Test =()=>{
    return(
    <div className="container-fluid">
      <div className="row  ">
      <div className="col-2">
          <div className="row">
               <div className="col">
               <span className="material-icons-outlined row">visibility</span><br></br>
                <i className="row"> Accésibilité</i>
               </div>
          </div>
          <div className="row">
          <div className="col">
               <span className="material-icons-outlined row">menu</span><br></br>
                <i className="row"> menu</i>
               </div>
            
             
          </div>
      </div>
      <div className="col">
          <div className="row">
              <div className="col"><i>Je suis un professionnel</i></div>
              <div><span className="material-icons-outlined">storefront</span></div>

          </div>
          <div className="row">
          <div className="col"><i>Je suis une association</i></div>
            <div><span className="material-icons-outlined">waving_hand</span></div>

            
          </div>
      </div>
      <div className="col">
           <div className="row">
               <p>Simpl'ici</p>
           </div>
           <div className="row">
                <div className="col">
                 <input placeholder="Rechercher un mot, une expression,une réference"></input>
                </div>
                <div className="col"><span className="material-icons-outlined">search</span></div>
                <div className="col">Rechercher</div>
           </div>
      </div>
      <div className="col">bbbbfghjhjhjjhjhjhjhjjhhjhj</div>
  
      </div>
    </div>

    )
}
export default Test