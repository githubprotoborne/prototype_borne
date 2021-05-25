import "../../../css/Contrast.css"
import {reinforceContrast} from "../../Services/ReinforceContrast"
import {handleBrightSupression} from "../../Services/handleBrightSupression"

   
const Contrast =()=>{
   
   
    let standardContrast=()=>{
        $("body").css("background-color", "")
    // home style
        $(".category_button").css("background-color", "")
        
        $(".home-button").css({color:""});
       
        $(".col_margin").css("background-color", "")
        $(".state_containers").css("border-color", "")
       //navbar
        $("#title-simplici").css("color", "")
        $("#title-simplici").css("background-color", "")
        $(".category_title").css({color:""});
        $(".bread-items").css({color:""});
        // vie admnistrative et vie locale 
        $(".contain-title").css("color", "")
        // footer 
        $(".footer-container").css("background-color", "")
         // Container style
         $(".processes-position").css("color", "")
         $(".sections").css("color", "")
         $(".bread-text").css("background-color","")
            //subcontainer style
            $(".subcontainer").css("color", "")
            $(".topic-item").css("background-color","")
  
         // menu style
           
         $(".sidenav").css("background-color","")
         $(".style").css("background-color", "")
         $(".style").css("color", "")
         $(".menu-home-icon").css("background-color", "")
         $(".menu-home-icon").css("color", "")
         
         $(".contrast-container").css("background-color", "")
         $(".contrast-container").css("color", "")
         $(".close-button-icon").css("color", "")
         $(".close-button-text").css("color", "")
        // $(".close-button-item").css("background-color", "#333")
         
        
        
  
      
   
  }
    let handleClose=()=>{
        $(".contrast-container").css({display:"none"})
        handleBrightSupression()
    }
    let handleStandardClick=()=>{
        $(".standard").css({backgroundColor:"#E5112F",color:"#fff"})
        $(".reinforced").css({backgroundColor:"#fff",color:"#000"})
        sessionStorage.setItem("contrast","standard")
        standardContrast()

    }
    let handleReinforcedClick=()=>{
        $(".standard").css({backgroundColor:"#fff",color:"#000"})
        $(".reinforced").css({backgroundColor:"#000",color:"#fff"})
        sessionStorage.setItem("contrast","reinforced")
        reinforceContrast()
    }
    return (
        <div className="contrast-container" role="dialog">
            <div className="row">
            <h1 className="contrast-title col-7">Option d'accéssibilité</h1>
            <button className="btn col close-button-item" role="button" onClick={handleClose}>
                  <span className="material-icons-outlined close-button-icon" aria-hidden="true">close</span>
                  <span className="close-button-text" aria-hidden="true">Fermer</span>
              </button>
           
            </div>
             <hr/>
             <h2 className="contrast-subtitle">Contraste</h2>

            <button className="standard" role="button" onClick={handleStandardClick}>Standard</button>
            <button className="reinforced" role="button" onClick={handleReinforcedClick}>Renforcé</button>
           

        </div>
    )
}
export default  Contrast