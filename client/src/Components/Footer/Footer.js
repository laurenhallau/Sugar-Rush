import React, { Component } from "react";
import {Footer} from "react-materialize";
import "./style.css"
import {Link} from 'react-router-dom';

class pageFooter extends Component{
  render(){
    return (
      <div>
        <Footer
          className="example sticky-footer"
          copyrights="&copy; 2020 SugarRush"
          links={
            <ul>
              <li>
              <Link to="/">
          Home
          </Link>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  About
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Order Now
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Top Rated
                </a>
              </li>
            </ul>
          }
        >
          <h5 className="white-text sticky-footer">Sugar Rush</h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </div>
    );
  }
}


export default pageFooter;
