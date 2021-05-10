import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch,Router, NavLink} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import Example from './Example';
import Scan from './Scan'

import NavBar from './NavBar/NavBar';
import Test from './NavBar/Test';
import Test2 from './NavBar/Test2';

import Processes from './Process/Processes';
import Process from './Process/Process';



class Index extends Component {
  render() {
    return (
      <div className="" >
        
        <BrowserRouter >
        
     
        <Switch>
        <Route path="/scan"  component={Scan}/>
        <Route path="/demarches"   component={Processes}/>
  

        <Route path="/demarche/:process_name"   component={Process}/>
        <Route path="/nav"  component={Test}/>
        <Route path="/test"  component={Test2}/>
        <Route path="/"   component={Example}/></Switch>
      </BrowserRouter>

      </div>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));