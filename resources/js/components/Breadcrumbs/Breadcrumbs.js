
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "../../../css/breadcrumbs.css"
import {Link, NavLink} from 'react-router-dom';
import routeConfig from '../routeConfig'

// breadcrumbs component
const Breadcrumbs = ({ breadcrumbs }) => (
  <ol>
    {
    //display breadcrumb if there is more than one item 
    //display all breadcrumbs as links except the last one
  
    
    breadcrumbs.map(({
      match,
      breadcrumb
    },index) => (
      breadcrumbs.length-1 !==index?
      <li key={match.url} className="bread-items row">
        <Link to={match.url}>{breadcrumb}{' >'}</Link>
     
        
      </li>:<li key={match.url} className="bread-items row">
        <Link to={match.url}>{breadcrumb} </Link>
       
        
      </li>
    ))}
  </ol>
);

 export default withBreadcrumbs(routeConfig,{ disableDefaults: false })(Breadcrumbs)
 // routeConfig contain a array with routes and bedscrumb item
