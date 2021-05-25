
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "../../../css/breadcrumbs.css"
import {Link, NavLink} from 'react-router-dom';
import routeConfig from '../routeConfig'


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
        {console.log()}
        
      </li>:<li key={match.url} className="bread-items row">
        <Link to={match.url}>{breadcrumb} </Link>
        {console.log()}
        
      </li>
    ))}
  </ol>
);

 export default withBreadcrumbs(routeConfig,{ disableDefaults: false })(Breadcrumbs)
 // routeConfig contain a array with routes and bedscrumb item
