import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top " style={{backgroundColor:'brown'}}>
          <div className="container-fluid mx-3">
            <Link className="navbar-brand" to="/">
              React News App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                <Link className="nav-link active" aria-current="page" to="/">
                  General
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
