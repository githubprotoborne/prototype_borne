import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch,Router} from 'react-router-dom';
import Example from './Example';
import Scan from './Scan';
class Index extends Component {
  render() {
    return (
      <div id="index">
        <BrowserRouter>
        <Switch>
        
        <Route path="/scan"  component={Scan} />
        <Route path=""  component={Example} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));