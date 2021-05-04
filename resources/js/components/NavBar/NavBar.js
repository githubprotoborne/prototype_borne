import { useEffect, useState } from 'react'
import MaterialIcon from 'react-google-material-icons'
import "../../../css/NavBar.css"
import Bootstrap from "bootstrap"
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
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
    let  openNav=() =>{
        document.getElementById("mySidenav").style.width = "27%";
       
      }
      let  close=() =>{
        document.getElementById("b").addEventListener("click",()=>{
            document.getElementById("mySidenav").style.width = "0px";
        })
      
       
      }
      useEffect(()=>{
          close()
      })
     
    return(
        <nav className="container-fluid">

            {//sider bar code for menu 
            }
    <div id="mySidenav" class="sidenav" >
    <a href="javascript:void(0)" id="b" class="closebtn" onclick="closeNav()">&times;</a>
    <Link to="/">Accueil</Link>
    <Link to="/scanner">Scanner Un document</Link>
</div>
             <div className="row">
                       
                     <button className="col-2 col_margin" role="button" title="Retour en arrière" onClick={back}>
                     <span className="material-icons-outlined back_icon" aria-hidden="true">arrow_back</span>
                     <span className="back_text">Retour</span>
                     </button>

                  
                  <button className="col-2 col_margin"  title= "Retour à l'accueil" role="button" onClick={goHome}>
                   <span className="material-icons-outlined home_icon"  aria-hidden="true">home</span>
                   <span className="home_text">Accueil</span>
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