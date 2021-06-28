
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Contrast from "../Contrast/Contrast"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import GrandChambery from "./logos/Grand-Chambery.svg"
import "../../../css/Administration.css"
import chambery from "./logos/chambery.svg"
import poleEmploi from "./logos/pole-emploi.svg"
import caf from "./logos/caf.svg"
import poste from "./logos/poste.svg"
import maladie from "./logos/maladie.svg"
import retraite from "./logos/retraite.svg"
import Footer from "../LegalInfo/Footer"
// "site d'une administration" component  
const Administration = () => {

    return (

        <div className="admin-wall-page">
            <div>
                <div id="side">
                    <Menu></Menu>
                    <Contrast></Contrast>
                </div>

            </div>
            <div id="contain" className='contain-administration'>
                <NavBar></NavBar>
                <div className="bread-text">
                    <Breadcrumbs></Breadcrumbs>
                </div>
                <div className="administration-container">

                    <h2 className="administration-title">Je choisis une administration</h2>

                    <div className="top-botom admin">
                         <a className="grand-chambery  top-botom administration-item" href="https://www.grandchambery.fr/">
                         <p className="administration-text">Grand Chambéry</p>
                         <img  className="administration-image" src={GrandChambery} alt="logo Grand Chambéry"></img>
                         
                         </a>
                        
                         <a className="chambery  administration-item" href="https://simplici.chambery.fr/">
                         <p className="administration-text">Ville de Chambéry</p>
                         <img  className="administration-image" src={chambery} alt="logo ville de Chambéry"></img>
                         
                         </a>
                        

                    </div>

                    
                    <div>
                    <a className="chambery administration-item" href="https://www.pole-emploi.fr/">
                         <p className="administration-text">Pôle Emploi</p>
                         <img  className="administration-image" src={poleEmploi} alt="logo pôle emploi"></img>
                         
                     </a>
                     <a className="chambery administration-item" href="https://www.caf.fr/">
                         <p className="administration-text">Caisse Nationale des Allocations Familiales</p>
                         <img  className="administration-image" src={caf} alt="logo de la Caf"></img>
                         
                     </a>
                     <a className="chambery administration-item" href="https://www.laposte.fr/">
                         <p className="administration-text">La Poste</p>
                         <img  className="administration-image" alt="logo de la poste" src={poste}></img>
                         
                    </a>
                        
                        
                        
                        
                    </div>
                    <div className="top-botom">
                    <a className="chambery administration-item" href="https://www.ameli.fr/">
                         <p className="administration-text">L'Assurance Maladie</p>
                         <img  className="administration-image"  alt="logo de l'assurance maladie" src={maladie}></img>
                         
                    </a>
                    <a className="chambery administration-item" href="https://www.lassuranceretraite.fr/">
                         <p className="administration-text">L'Assurance Retraite</p>
                         <img  className="administration-image" src={retraite} alt="logo de l'assurance retraite"></img>
                         
                    </a>

                    </div>
                

                </div>
              
                <Footer></Footer>
            </div>
            
        </div>
    )
}
export default Administration