import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
import "./style.css";
class Dashboard extends Component {
  state = {
    home: false,
    accountinfo: false,
    favorites: false,
    orderhistory:false
  };
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onHomeClick = (e) => {
    e.preventDefault();
    this.setState({home: true });
  };
  onAccountClick = (e) => {
    e.preventDefault();
    this.setState({ accountinfo: true });
  };
  render() {
    if (this.state.home) {
      return <Redirect push to="/" />;
    }
    if (this.state.accountinfo) {
      return <Redirect push to="/accountinfo" />;
    }
    const { user } = this.props.auth;
    return (
      <div
        style={{ height: "75vh", paddingLeft: "25px" }}
        className="container valign-wrapper"
      >
        <div className="row dashboard">
          <div className="col s12 center-align ">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to SugarRush! 🍩
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onHomeClick}
              className="btn btn-large waves-effect waves-light hoverable aqua accent-3"
            >
              Order Now
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              className="btn btn-large waves-effect waves-light hoverable aqua accent-3"
            >
              Favorites
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              className="btn btn-large waves-effect waves-light hoverable aqua accent-3"
            >
              Order History
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onAccountClick}
              className="btn btn-large waves-effect waves-light hoverable aqua accent-3"
            >
              Account Info
            </button>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable aqua accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
