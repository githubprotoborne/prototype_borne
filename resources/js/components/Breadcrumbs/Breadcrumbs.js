
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "../../../css/breadcrumbs.css"
import {NavLink} from 'react-router-dom';
const Breadcrumb= withBreadcrumbs()(({ breadcrumbs }) => (
  <div className="bread">
   
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    
   
    {breadcrumbs.map(({
      match,
      breadcrumb
    },index) => (
      <span key={match.url}>
          
         {
           index===breadcrumbs.length-1? <li className="breadcrumb-item active bread-scrumbItem"  aria-current="page">  <NavLink to={match.url}>{breadcrumb.props.children}</NavLink></li>
          : <li className="breadcrumb-item  bread-scrumbItem"  aria-current="page">  <NavLink to={match.url}>{breadcrumb.props.children+">"}</NavLink></li>
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