import React, { Component } from "react";
import { Footer } from "react-materialize";
import "./style.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD

class pageFooter extends Component{
  render(){
=======
class pageFooter extends Component {
  render() {
>>>>>>> b4a2508c96000724dc253ac5e1af99d0b3b25213
    return (
      <div>
        <Footer
          className="example sticky-footer"
          copyrights="&copy; 2020 SugarRush"
          links={
            <ul>
              <li className="grey-text text-lighten-3">
                <Link to="/">Home</Link>
              </li>
              <li className="grey-text text-lighten-3">
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          }
        >
          <h5 className="white-text sticky-footer">Sugar Rush</h5>
          <p className="grey-text text-lighten-4">
<<<<<<< HEAD
            
           <form>
            <div class="row">
              <p>Sign up for special offers!</p>
              <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_mail" type="tel" className="validate" />
          <label className="white-text">Name</label>
        </div>
      <div className="input-field col s6">
          <i className="material-icons prefix">mail</i>
          <input id="icon_mail" type="tel" className="validate" />
          <label className="white-text">Email</label>
        </div>
        {/* <SubmitButton onClick={this.handleSubmit} /> */}
      </div>

          </form>
=======
            <form>
              <div className="row">
                <p>Sign up for special offers!</p>
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
>>>>>>> b4a2508c96000724dc253ac5e1af99d0b3b25213
          </p>
        </Footer>
      </div>
    );
  }
}

export default pageFooter;
