import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Contrast from "../Contrast/Contrast"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import "../../../css/NotFound.css"
const NotFound = () => {
  return (
    <div className="notFound-container">
    <div>
        <div id="side">
            <Menu></Menu>
            <Contrast></Contrast>
        </div>

    </div>
    <div id="contain" className='contain-notFound'>
        <NavBar></NavBar>
        <div className="bread-text">
            <Breadcrumbs></Breadcrumbs>
        </div>
        <div className="notfound-container">

            <h2>Cette page n’existe pas</h2>
            <p className="notfound-description">Peut-être a-t-elle été supprimée, peut-être un lien est-il mauvais, par chance la page d’accueil reste bien présente.</p>


        </div>
    </div>
</div>
  )}
export default NotFound