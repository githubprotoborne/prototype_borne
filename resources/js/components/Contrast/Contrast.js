import "../../../css/Contrast.css"

const Contrast =()=>{
    let handleBrightSupression=()=>{
     document.getElementById("contain").style.opacity="1"        
    document.getElementById("contain").style.setProperty("background","")// the div witch contain the component render except the sidebar
    $("#choiseBar").css("filter", "brightness(100%)"); // set the brightness to the choice bar from Choicebar component
    $(".desk-bread-cont").css("filter", "brightness(100%)"); //set the brightness to the breadscrum  from Cont component
    $(".section-position").css("filter", "brightness(100%)");// set the brightness to the sections items from Cont component 
    $(".category_button").css("filter", "brightness(100%)"); // set the brightness to the category button  items from Home component 
    $("#menu-container").css("filter", "brightness(100%)");
    }
    let reinforceContrast=()=>{
        
          $(".category_button").css("background-color", "#000")
          
          $(".home-button").css({color:"#fff"});
          $("body").css("background-color", "#222")
          $(".col_margin").css("background-color", "#000")
        
          $("#title-simplici").css("color", "#222")
          $("#title-simplici").css("background-image", "webkit-linear-gradient( -28deg, #222 0%, #222 50%, #Efff 60%, #FFF 50%)")
          $("#title-simplici").css("background-image", " linear-gradient( -28deg, #222 0%, #222 50%, #FFF 50%, #FFF 50%)")
          $(".category_title").css({color:"#fff"});
          $(".bread-items").css({color:"#fff"});
         
          
     
    }
    let standardContrast=()=>{
    
        $(".category_button").css("background-color", "")
        
        $(".home-button").css({color:""});
        $("body").css("background-color", "")
        $(".col_margin").css("background-color", "")
       
        $("#title-simplici").css("color", "")
        $("#title-simplici").css("background-image", "")
        $("#title-simplici").css("background-image", "")
        $(".category_title").css({color:""});
        $(".bread-items").css({color:""});
  
      
   
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
              <button className="btn close-button-item" role="button" onClick={handleClose}>
                  <span className="material-icons-outlined close-button-icon" aria-hidden="true">close</span>
                  <span className="close-button-text" aria-hidden="true">Fermer</span>
              </button>
             <h1 className="contrast-title">Option d'accéssibilité</h1>
             <hr/>
             <h2 className="contrast-subtitle">Contraste</h2>

            <button className="standard" role="button" onClick={handleStandardClick}>Standard</button>
            <button className="reinforced" role="button" onClick={handleReinforcedClick}>Renforcé</button>
           

        </div>
    )
}
export default  Contrast