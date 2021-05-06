import { Link } from "react-router-dom"
import '../../../css/Menu.css'

const Menu=()=>{
    return (
        
         <div id="mySidenav" className="sidenav" >
         <button   id="b" className="closebtn menu_btn" role="button" >&times;</button>
         <h3 className="menu_title">Menu</h3>
         <Link to="/" style={{
             color:"#E5112F"
         }}>Accueil</Link>
         <Link to="/scanner" to="/" style={{
             color:"#E5112F"
         }}>Scanner Un document</Link>
         </div>

    )


}

export default Menu