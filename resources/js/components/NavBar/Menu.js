import { Link } from "react-router-dom"
import '../../../css/Menu.css'

const Menu = () => {
    return (

        <div id="mySidenav" className="sidenav" >

            <h3 className="menu_title style"><span className="menu_title_text style">Menu</span></h3>
            <Link className="row  menu-item menu-accueil style" to="/"
                style={{ color: "#E5112F" }} ><span className="style col  menu_home_text">Accueil</span > <span className="material-icons-outlined col-2  style  menu-home-icon" >home</span> </Link>
            <a className="row menu-item style" href="https://google.fr">
                <span className=" engine-text col style">Je récupère un document par courier électronique</span>
                <button className="material-icons-outlined col-2 menu-home-icon style engine-icon"> email</button>
            </a>
            <Link className="row menu-item style" to="/scanner"
                style={{ color: "#E5112F" }} ><span className="menu_scanner_text col style">Je numérise un document</span > <span className="material-icons-outlined  style col-2 scanner-icon menu-home-icon" >scanner</span> </Link>
             <a className="row menu-item style" href="file:///C:/Users/divin/Documents/">
                <span className=" engine-text col style">J'imprime un document</span>
                <button className="material-icons-outlined col-2 menu-home-icon style engine-icon">print</button>
            </a>
            <button id="b" className="closebtn  style menu_btn" role="button" ><span className="material-icons-outlined  style menu-back-icon">arrow_back</span></button>
        </div>

    )


}

export default Menu