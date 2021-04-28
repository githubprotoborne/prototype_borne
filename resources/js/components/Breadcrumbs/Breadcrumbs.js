import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "./Breadcrumbs.css"
const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
  <div>
   
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    
   
    {breadcrumbs.map(({
      match,
      breadcrumb
    }) => (
      <span key={match.url}>
          
          <li className="breadcrumb-item active breadcrumb-item"  aria-current="page">  <NavLink to={match.url}>{breadcrumb.props.children+" /"}</NavLink></li>
        
      </span>
      
      
    ))}
    
  </ol>
</nav>
  </div>
 
));
export default Breadcrumbs