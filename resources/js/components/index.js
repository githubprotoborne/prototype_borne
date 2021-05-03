import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch,Router, NavLink} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import Example from './Example';
import Scan from './Scan'

import NavBar from './NavBar/NavBar';
import Test from './NavBar/Test';

class Index extends Component {
  render() {
    return (
      <div className="" >
        
        <BrowserRouter >
        
     
        <Switch>
        <Route path="/scan"  component={Scan}/>
        <Route path="/nav"  component={Test}/>
        <Route path="/"   component={Example}/></Switch>
      </BrowserRouter>

      </div>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));