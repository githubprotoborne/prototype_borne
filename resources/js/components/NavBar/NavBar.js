import { useEffect, useState } from 'react'
import MaterialIcon from 'react-google-material-icons'
import "../../../css/NavBar.css"

import { Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { reinforceContrast } from "../../Services/ReinforceContrast"
import { handleBrightSupression } from "../../Services/handleBrightSupression"
import { handleBright } from "../../Services/handleBright"
import { StandardContrast } from '../../Services/StandardContrast'
import { DarkWhiteContrast } from '../../Services/DarkWhiteContrast'

//import "../../../../public/css/app.css"
const NavBar2 = () => {
  //go back function
  let history = useHistory();
  let back = () => {
    history.goBack()
  }


  // handle the menu nav opening
  let openNav = () => {

    if ($(window).width() >= 900) {
      document.getElementById("mySidenav").style.width = "30%";// mySidenav in Menu component
    } else if($(window).width() >= 601 && $(window).width()<=899) {
      document.getElementById("mySidenav").style.width = "50%";
    }
    else{
      document.getElementById("mySidenav").style.width = "80%";
    }
    handleBright()

    //document.getElementById("menu-container").setAttribute("filter",'brightness(30%)'    
  }

  let close = () => {
    document.getElementById("b").addEventListener("click", () => {
      document.getElementById("mySidenav").style.width = "0%";

      $("#mySidenav").css("width", "0%");
      handleBrightSupression()
    })
  }
  let contrast = () => {
    /*  */
    $(".contrast-container").css({ display: "block" })
    handleBright()
  }

  let reinforceContrastCall = () => {
    if (sessionStorage.getItem("contrast") === "reinforced") {
      reinforceContrast()
    }else if(sessionStorage.getItem("contrast") === "dark_white"){
      DarkWhiteContrast()

    }
  }
let setNightMode =()=>{
  if (sessionStorage.getItem("contrast") === "reinforced") {
     StandardContrast()
     sessionStorage.setItem("contrast", "standard")
  }
  else{
  sessionStorage.setItem("contrast", "reinforced")
     reinforceContrast()
  }
}
let controlbackround=()=>{
  //alert($("#mySidenav").css("width"))
  if($("#mySidenav").css("width")==="0px"){
    $("body").css("background-color", "#FFF");
  }
  if(sessionStorage.getItem("contrast")==="reinforced" && $("#mySidenav").css("width")==="0px"){
    $("body").css("background-color", "#222");
  }
}
  useEffect(() => {
    close()
    reinforceContrastCall()
    controlbackround()

  })

  return (
    <nav className="navbar-container sticky-top" id="">

      {//sider bar code for menu 
      }

      <div className="row" id="menu-container" >

        <button className="nav_button phone-back" role="button" title="Retour en arrière" onClick={back}>
          <span className="material-icons-outlined  navbarspan navbar-retour-icon" aria-hidden="true">arrow_back</span>
          <span className="back_text  navbarspan">Retour</span>
        </button>


        <button className="nav_button" title="Retour à l'accueil" role="button" >
          <Link to="/" style={{ textDecoration: "none", display: "block" }}><span className="material-icons-outlined home_icon navbar-home-icon" aria-hidden="true">home</span></Link>
          <Link to="/" style={{ textDecoration: "none" }} className="home_text">Accueil</Link>
        </button>
        <div className="page_title" >
          <p className="title-simplici" >Simpl'ici <sup>+</sup> </p>
        </div>

        <button className="nav_tool_button navbar-menu" onClick={openNav} title="menu" role="button">
          <span className="material-icons-outlined navbar-icon navbarspan menu_icon" aria-hidden="true">menu</span>
          <span className="menu_text  navbarspan">Menu</span>
        </button>
        <button className="nav_tool_button" title="Retour à l'accueil" onClick={setNightMode} role="button">
          <span className="material-icons-outlined navbar-icon  navbarspan accessibility_icon" aria-hidden="true">dark_mode</span>
          <span className="accessibility_text  navbarspan">Mode nuit</span>
        </button>
        <button className="nav_tool_button" title="Retour à l'accueil" onClick={contrast} role="button">
          <span className="material-icons-outlined navbar-icon navbarspan accessibility_icon" aria-hidden="true">visibility</span>
          <span className="accessibility_text  navbarspan">Accessibilité</span>
        </button>
      </div>
    </nav>

  )
}
export default NavBar2