import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Redirect, Link, Route, Switch,Router, NavLink} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import Example from './Example';


import SessionTimeout from './SessionTimeout';



class Index extends Component {
  render() {
    return (
     <SessionTimeout/>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));