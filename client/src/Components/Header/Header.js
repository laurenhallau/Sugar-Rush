import React, { Component } from "react";
import { Navbar, NavItem, Icon, } from "react-materialize";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar
        alignLinks="right"
        brand={
          <a style={{textDecoration: "none", color:"white"}} className="brand-logo" href="/" alt="Sugar Rush logo">
            Sugar Rush
          </a>
        }
        centerLogo
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <Link style={{textDecoration: "none", color:"white"}} to="/cart">
          My Cart
          </Link>
        <NavItem style={{textDecoration: "none", color:"white"}} onClick={function noRefCheck() {}} href="/register">Sign Up</NavItem>
        <NavItem style={{textDecoration: "none", color:"white"}} href="/login">Log In</NavItem>
        
          
       
      
      </Navbar>
    );
  }
}

export default Header;
