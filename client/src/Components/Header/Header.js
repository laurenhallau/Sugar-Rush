import React, { Component } from "react";
import { Navbar, NavItem, Icon, } from "react-materialize";

class Header extends Component {
  render() {
    return (
      <Navbar
        alignLinks="left"
        brand={
          <a className="brand-logo" href="/" alt="Sugar Rush logo">
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
        <NavItem onClick={function noRefCheck() {}}>Sign Up</NavItem>
        <NavItem href="components.html">Log In</NavItem>
      </Navbar>
    );
  }
}

export default Header;
