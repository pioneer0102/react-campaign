import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Log Out</a>
          </li>
        ];
    }
  }

  render() {
      const isSurveysPage = this.props.location.pathname === "/surveys";
      const linkTo = this.props.auth ? (isSurveysPage ? "/" : "/surveys") : "/";

      return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link
                to={linkTo}
                className="left brand-logo"
                style={{ paddingLeft: "30px" }}
              >
                Campane
              </Link>
              <ul className="right">{this.renderContent()}</ul>
            </div>
          </nav>
        </div>
      );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(Header));
