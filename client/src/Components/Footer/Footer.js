import React, { Component } from "react";
import { Footer } from "react-materialize";
import "./style.css";
import { Link } from "react-router-dom";

class pageFooter extends Component {
  render() {
    return (
      <div>
        <Footer
          className="example sticky-footer"
          copyrights="&copy; 2020 SugarRush"
          links={
            <ul>
              <li className="grey-text text-lighten-3">
                <Link style={{textDecoration: "none", color:"black"}} to="/">Home</Link>
              </li>
              <li className="grey-text text-lighten-3">
                <Link style={{textDecoration: "none", color:"black"}} to="/about">About</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:"black"}} to="/contact">Contact Us</Link>
              </li>
            </ul>
          }
        >
          <h5 className="white-text sticky-footer">Sugar Rush</h5>
          <p>Sign up for special offers!</p>
          <p className="grey-text text-lighten-4">
            <form>
                <div className="row">
                <div className="input-field col s4">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="icon_mail" type="tel" className="validate" />
                  <label for="icon_mail" className="white-text">
                    Name
                  </label>
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix">mail</i>
                  <input id="icon_mail" type="tel" className="validate" />
                  <label for="icon_mail" className="white-text">
                    Email
                  </label>
                </div>
              </div>
              <button className="btn">Submit</button>
            </form>
          </p>
        </Footer>
      </div>
    );
  }
}

export default pageFooter;
