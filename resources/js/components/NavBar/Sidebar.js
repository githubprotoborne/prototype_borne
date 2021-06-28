import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "../../../css/SideBar.css"
import { Link } from "react-router-dom"
class SideBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (


      <div id="mySidenav" className="" >
        <button id="b" className="closebtn menu_btn" role="button" >&times;</button>
        <h3 className="menu_title">Menu</h3>
        <Link to="/" style={{
          color: "#E5112F"
        }}>Accueil</Link>
        <Link to="/scanner" to="/" style={{
          color: "#E5112F"
        }}>Scanner Un document</Link>
      </div>

    )
  }

}
export default SideBar