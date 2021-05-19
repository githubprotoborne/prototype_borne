import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Redirect, Link, Route, Switch,Router, NavLink} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import Example from './Example';

import Container from "../components/Container/Container"

import NavBar from './NavBar/NavBar';
import Test from './NavBar/Test';
import Test2 from './NavBar/Test2';
import Home from './Home/Home';
import Cont from './Container/Cont';
import SideBar from './NavBar/Sidebar';
import Processes from './Process/Processes';
import Process from './Process/Process';
import NotFound from './NotFound/NotFound';
import routeConfig from "./routeConfig"



class Index extends Component {
  render() {
    return (
      <div className="" >
        
        <BrowserRouter >
        
     
        <Switch>
        
        <Switch>
            {routeConfig.map((route, i) => (
              <Route key={route} {...route} />
            ))}
          </Switch>
       
        
        </Switch>
      </BrowserRouter>

      </div>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));