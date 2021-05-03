import { useState } from 'react'
import MaterialIcon from 'react-google-material-icons'
import "../../../css/NavBar.css"
import Bootstrap from "bootstrap"
import { Link } from 'react-router-dom'
//import "../../../../public/css/app.css"
const NavBar = ()=>{

    const [professional,setProfessional] =useState("Je suis un professionel")
    const [association,setAssociation] =useState("Je suis une association")
    return(
        <div className="container">
            <div className="row row_one h-50">
                 <div className="col-2 accessibility">
                      <span className="material-icons-outlined bloc_span " aria-hidden="true">visibility</span>
                      <span className="visibility_text bloc_span" >Accessibilité</span>
                 </div>
                 <div className="col-3 cc ">
                     <div className="row professional ">
                               
                         <div className="col ">
                         <Link>
                             <span className="professional_text">Je suis un professionel</span>
                     
                          </Link>   
                          
                         </div>
                         <div className="col-2" >
                         <span className="professional_text material-icons-outlined" aria-hidden="true">storefront</span>

                         </div>
                     </div>
                    

                 </div>
                 <div className="col-4 cc ">
                    <div className="row portal_title ">
                    <h3 className="portail_h2"  >Simpl'ici +</h3>
                    </div>

                 </div>
                 <div className="col-3 cc">
                 <div className="row  service">
                        <div className="col">
                        <Link className="">
                         Accès direct à un service <p className="list_service">La poste,pôle emploi,...</p>    
                         </Link>
                 

                        </div>   
                          <div className="col-2"> 
                          <span className="professional_text material-icons-outlined" aria-hidden="true">touch_app</span>
                          
                          </div>
                        
                 </div>

                 </div>

            </div>
          
            <div className=" row row_two h-50">
            <div className="col-2 menu">
                <div className="row ">
                    
                    <div className=" btn "  id="me" aria-hidden="true"  data-target="#collapseMenu" data-toggle="collapse" aria-expanded="false" aria-controls="collapseMenu">
                     <span className=" span_block material-icons-outlined " id="me" aria-hidden="true">menu</span>
  
                     <i className="visibility_text bloc_span" >Menu</i>
                    </div>
                   
                 
                   <div class="collapse" id="collapseMenu">
                          <div class="card card-body">
                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                          </div>
                  </div>
             
             </div>
                  
                   </div>
                   <div className="col-3 cc">
                       <div className="row association">
                           <div className="col">
                               <Link to="/association"  className=""> Je suis une association </Link>
                            </div>   
                 <div className="col-2">
                    <span className=" professional_text material-icons-outlined" aria-hidden="true">waving_hand</span>

                        </div>
                               
                   
                    </div>

                 </div>
                <div className="col-4 cc">
                     <div className="row search-row">
                          <div className="col input_back">
                             <span><input type="text" className="search_input" placeholder="Rechercher un mot,une expression,une référence"/></span>

                           </div>
                          <div className="col  search_back">
                             <span className="material-icons-outlined search-icon ">search</span>  
                             <span className="search_button">Rechercher</span>
                          </div>
                          
                     </div>
                   
                  

                 </div>
                 <div className="col-3   cc">
                     <div className="row resident">
                          
                          <Link className="professional_text">Je suis un nouvel habitant</Link>
                     </div>

                  </div>

            </div>

       
        </div>
 
     )
}
export default NavBar