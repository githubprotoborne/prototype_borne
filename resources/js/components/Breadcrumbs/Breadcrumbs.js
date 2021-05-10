
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "../../../css/breadcrumbs.css"
import {Link, NavLink} from 'react-router-dom';
const Breadcrumb= withBreadcrumbs()(({ breadcrumbs }) => (
  <div>
   
    <nav aria-label="breadcrumb">
  <ol className="bread-items">
    
   
    {breadcrumbs.map(({
      match,
      breadcrumb
    },index) => (
      <span key={match.url}>
          
         {
           index===breadcrumbs.length-1? <li className="bread-items"  aria-current="page">  <Link to={match.url}>{breadcrumb.props.children ==="Home"?"Accueil":breadcrumb.props.children}</Link></li>
          : <li className="bread-items"  aria-current="page">  <Link to={match.url}>{breadcrumb.props.children ==="Home"?"Accueil"+" >":breadcrumb.props.children+" >"}</Link></li>
          }
        
      </span>
      
      
    ))}
    
  </ol>
</nav>
  </div>
 
));

const  Breadcrumbs =()=>{

  return(
    <Breadcrumb/>
  )
}
export default Breadcrumbs