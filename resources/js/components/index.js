import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch,Router, NavLink} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import Example from './Example';

import Container from "../components/Container/Container"

import NavBar from './NavBar/NavBar';
import Test from './NavBar/Test';
import Test2 from './NavBar/Test2';
import Home from './Home/Home';
import Cont from './Container/Cont';
import SideBar from './NavBar/Sidebar';


class Index extends Component {
  render() {
    return (
      <div className="" >
        
        <BrowserRouter >
        
     
        <Switch>
        
        <Route path="/nav"  component={Test}/>
        <Route path="/test"  component={SideBar}/>
        <Route path="/mes-demarches"component={Cont}/>
        <Route path="/exemple"   component={Example}/>
        <Route path="/" component={Home}/>
        
        </Switch>
      </BrowserRouter>

      </div>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));