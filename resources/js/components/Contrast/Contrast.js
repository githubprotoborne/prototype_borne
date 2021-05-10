
import "../../../css/Contrast.css"
const Contrast=()=>{
      
    let standard=()=>{
        $("#index > ").attr('style', $("body").attr('style') + '; ' + 'background-color: blue !important');
    }
       
    let reinforced=()=>{
        $("body").css("background","filter:contrast(0)")
    }
    return(
        <div className="contrast-container">
            <button onClick={standard}> contraste standard</button>
            <button onClick={reinforced}> contraste Renforcé</button>

        </div>
    )
}
export default Contrast