import { useEffect, useState } from 'react'
import MaterialIcon from 'react-google-material-icons'
import "../../../css/NavBar.css"
import Bootstrap from "bootstrap"
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import axios from 'axios'
//import "../../../../public/css/app.css"
const NavBar = ()=>{

    const [professional,setProfessional] =useState("Je suis un professionel")
    const [association,setAssociation] =useState("Je suis une association")
    //go back function
    let history = useHistory();
    let back=()=>{
        history.goBack()
    }
    //go to homepage
    
    let goHome=()=>{
        return <Redirect to="/"></Redirect>
    }
    // handle the menu nav opening
    let  openNav=() =>{
      
        if ($(window).width() >= 700) { 
            document.getElementById("mySidenav").style.width = "27%";
        } else {
            document.getElementById("mySidenav").style.width = "57%";
        }
      
        $("#contain").css("filter", "brightness(30%)");
        $("body").css("background","#555").css("transform","none")
        
        
        
     

       
      }
      // handle the menu close
      let  close=() =>{
        document.getElementById("b").addEventListener("click",()=>{
           
            
           $("#contain").css("filter", "brightness(100%)");
            $("body").css("background","")
            document.getElementById("mySidenav").style.width = "0%";
            nav-position
            $("#mySidenav").css("width", "0%");

        })
      
       
      }
      useEffect(()=>{
          close()
      })
     
    return(
        <nav className="container-fluid sticky-top">

            {//sider bar code for menu 
            }
    
             <div className="row" >
                       
                     <button className="col-2 col_margin" role="button" title="Retour en arrière" onClick={back}>
                     <span className="material-icons-outlined back_icon" aria-hidden="true">arrow_back</span>
                     <span className="back_text">Retour</span>
                     </button>

                  
                  <button className="col-2 col_margin"  title= "Retour à l'accueil" role="button" >
                  <Link to="/" style={{textDecoration:"none",color:"#fff"}}><span className="material-icons-outlined home_icon"  aria-hidden="true">home</span></Link>
                   <Link  to="/"  style={{textDecoration:"none",color:"#fff"}} className="home_text">Accueil</Link>
                  </button>
                  <div className="col-4 page_title">
                      <p>Simpl'ici +</p>
                  </div>
                
                  <button className="col-2 col_margin"  onClick={openNav} title= "menu" role="button">
                   <span className="material-icons-outlined menu_icon"  aria-hidden="true">menu</span>
                   <span className="menu_text">Menu</span>
                  </button>
                 
                  <button className="col-2 col_margin"  title= "Retour à l'accueil" role="button">
                   <span className="material-icons-outlined accessibility_icon"  aria-hidden="true">visibility</span>
                   <span className="accessibility_text">Accessibilité</span>
                  </button>
             </div>
        </nav>
 
     )
}
export default NavBar