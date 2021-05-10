import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch,Router, NavLink} from 'react-router-dom';

import Example from './Example';
import Processes from './Process/Processes';
import Process from './Process/Process';
import Scan from './Scan';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "../../css/breadcrumbs.css"

const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
  
  <div>
   
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    
   
    {breadcrumbs.map(({
      match,
      breadcrumb
    },index) => (
      <span key={match.url}>
          
         {
           index===breadcrumbs.length-1? <li className="breadcrumb-item active bread-scrumbItem"  aria-current="page">  <NavLink to={match.url}>{breadcrumb.props.children}</NavLink></li>
          : <li className="breadcrumb-item  bread-scrumbItem"  aria-current="page">  <NavLink to={match.url}>{breadcrumb.props.children+" /"}</NavLink></li>
          }
        
      </span>
      
      
    ))}
    
  </ol>
</nav>
  </div>
 
));
class Index extends Component {
  render() {
    return (
      <div id="index">
        
        <BrowserRouter>
     
        <Breadcrumbs />
        <Switch>
        <Route path="/scan"  component={Scan}/>
        <Route path="/demarches"   component={Processes}/>
        <Route path="/demarche/:process_name"   component={Process}/>
        <Route path="/"   breadcrumb="Acceuil" component={Example}/></Switch>
        
      </BrowserRouter>

      </div>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));