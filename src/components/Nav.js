import React, { Component } from 'react';
//import { NavLink } from "react-router-dom";

import '../index.css'

class Nav extends Component {
    render () {
    return (
      <section>
          <div id="nav">
            <div id="menu" className="container">
                <ul>
                    <li>Contact</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>About</li>
                    <li style={{float: 'left'}}>Logo</li>
                </ul>
            </div>
        </div>
      </section>
    );
    }
  }
  
  export default Nav;