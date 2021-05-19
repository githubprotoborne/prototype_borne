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
    
   
    // handle the menu nav opening
    let  openNav=() =>{
      
        if ($(window).width() >= 700) { 
            document.getElementById("mySidenav").style.width = "27%";// mySidenav in Menu component
        } else {
            document.getElementById("mySidenav").style.width = "57%";
        }
      handleBright()
       
     //document.getElementById("menu-container").setAttribute("filter",'brightness(30%)'

       
      }
      // handle the menu close
      let handleBright=()=>{
        document.getElementById("contain").style.opacity="0.9"
        document.getElementById("contain").style.setProperty("background","#555","important")// the div witch contain the component render except the sidebar
       
       
        $("#choiseBar").css("filter", "brightness(30%)"); // set the brightness to the choice bar from Choicebar component
        $(".desk-bread-cont").css("filter", "brightness(30%)"); //set the brightness to the breadscrum  from Cont component
        $(".section-position").css("filter", "brightness(30%)");// set the brightness to the sections items from Cont component 
        $(".category_button").css("filter", "brightness(30%)"); // set the brightness to the category button  items from Home component 
        $("#menu-container").css("filter", "brightness(30%)");
        
          
      }
      let  close=() =>{
        document.getElementById("b").addEventListener("click",()=>{
           document.getElementById("mySidenav").style.width = "0%";
          
            $("#mySidenav").css("width", "0%");
            handleBrightSuppression()
          

        })
      
       
      }
      let contrast =()=>{
          /*  */
   $(".contrast-container").css({display:"block"})
   handleBright()      
  }

  let reinforceContrast=()=>{
      if(sessionStorage.getItem("contrast")==="reinforced"){
        $(".category_button").css("background-color", "#FFF")
        
        $(".home-button").css({color:"#222"});
        $("body").css("background-color", "#FFF")
        $(".col_margin").css("background-color", "#222")
        $("#title-simplici").css("color", "#222")
        $("#title-simplici").css("background-image", "webkit-linear-gradient( -28deg, #222 0%, #222 50%, #Efff 60%, #FFF 50%)")
        $("#title-simplici").css("background-image", " linear-gradient( -28deg, #222 0%, #222 50%, #FFF 50%, #FFF 50%)")

      }
   
  }

  
  let handleBrightSuppression=()=>{
    document.getElementById("contain").style.opacity="1"       
    document.getElementById("contain").style.setProperty("background","")// the div witch contain the component render except the sidebar
    $("#choiseBar").css("filter", "brightness(100%)"); // set the brightness to the choice bar from Choicebar component
    $(".desk-bread-cont").css("filter", "brightness(100%)"); //set the brightness to the breadscrum  from Cont component
    $(".section-position").css("filter", "brightness(100%)");// set the brightness to the sections items from Cont component 
    $(".category_button").css("filter", "brightness(100%)"); // set the brightness to the category button  items from Home component 
    $("#menu-container").css("filter", "brightness(100%)");
  }
      useEffect(()=>{
          close()
          reinforceContrast()
         
      })
     
    return(
        <nav className="container-fluid sticky-top backdrop" id="menu-container">

            {//sider bar code for menu 
            }
    
             <div className="row" id="menu-container" >
                       
                     <button className="col-2 col_margin" role="button" title="Retour en arrière" onClick={back}>
                     <span className="material-icons-outlined  navbarspan back_icon" aria-hidden="true">arrow_back</span>
                     <span className="back_text  navbarspan">Retour</span>
                     </button>

                  
                  <button className="col-2 col_margin"  title= "Retour à l'accueil" role="button" >
                  <Link to="/" style={{textDecoration:"none",color:"#fff",display:"block"}}><span className="material-icons-outlined home_icon"  aria-hidden="true">home</span></Link>
                   <Link   to="/"  style={{textDecoration:"none",color:"#fff",display:"block"}} className="home_text">Accueil</Link>
                  </button>
                  <div className="col-4 page_title" id="title-simplici">
                      <p>Simpl'ici +</p>
                  </div>
                
                  <button className="col-2 col_margin"  onClick={openNav} title= "menu" role="button">
                   <span className="material-icons-outlined  navbarspan menu_icon"  aria-hidden="true">menu</span>
                   <span className="menu_text  navbarspan">Menu</span>
                  </button>
                 
                  <button className="col-2 col_margin"  title= "Retour à l'accueil" onClick={contrast} role="button">
                   <span className="material-icons-outlined  navbarspan accessibility_icon"  aria-hidden="true">visibility</span>
                   <span className="accessibility_text  navbarspan">Accessibilité</span>
                  </button>
             </div>
        </nav>
 
     )
}
export default NavBar