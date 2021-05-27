import "../../../css/Contrast.css"
import { reinforceContrast } from "../../Services/ReinforceContrast"
import { handleBrightSupression } from "../../Services/handleBrightSupression"
import {StandardContrast} from '../../Services/StandardContrast'
import { DarkWhiteContrast } from "../../Services/DarkWhiteContrast"

const Contrast = () => {

    let handleClose = () => {
        $(".contrast-container").css({ display: "none" })
        handleBrightSupression()
    }
    let handleStandardClick = () => {
        $(".standard").css({ backgroundColor: "#E5112F", color: "#fff" })
        $(".reinforced").css({ backgroundColor: "#fff", color: "#000" })
        $(".darkWhite").css({ backgroundColor: "#fff", color: "#000" })
        sessionStorage.setItem("contrast", "standard")
        StandardContrast()

    }
    let handleReinforcedClick = () => {
        $(".standard").css({ backgroundColor: "#fff", color: "#000" })
        $(".darkWhite").css({ backgroundColor: "#fff", color: "#000" })
        $(".reinforced").css({ backgroundColor: "#000", color: "#fff" })
        sessionStorage.setItem("contrast", "reinforced")
        reinforceContrast()
    }
    let darkWhite= () => {
        $(".standard").css({ backgroundColor: "#fff", color: "#000" })
        $(".reinforced").css({ backgroundColor: "#fff", color: "#000" })
        $(".darkWhite").css({ backgroundColor: "#fff", color: "#000" })
        sessionStorage.setItem("contrast", "dark_white")
        DarkWhiteContrast()
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
            <hr />
            <h2 className="contrast-subtitle">Contraste</h2>

            <button className="standard" role="button" onClick={handleStandardClick}>Standard</button>
            <button className="reinforced" role="button" onClick={handleReinforcedClick}>Renforcé</button>
            <button className="darkWhite" role="button" onClick={darkWhite}>Noir sur blanc</button>


        </div>
    )
}
export default Contrast