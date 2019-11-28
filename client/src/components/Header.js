import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNav() {
    if (this.state.isOpen === true) {
      this.toggle();
    }
  }

  render() {
    return (
      <div className="navbar-container">
        <Navbar id="white-nav" color="light" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            <Link to="/">
              <img
                style={{ width: "90px" }}
                src="https://clipart.info/images/ccovers/1495749358batman-logo-3d-png-clip-art.png"
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <Link to="/" className="padded-nav" onClick={this.closeNav}>
                  {" "}
                  HOME{" "}
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  to="/about"
                  className="padded-nav"
                  onClick={this.closeNav}
                >
                  {" "}
                  ABOUT{" "}
                </Link>
              </NavItem>

              <NavItem>
                <a
                  href="http://fromgaming.com/"
                  target="_blank"
                  to="/contact-us"
                  className="padded-nav"
                  onClick={this.closeNav}
                >
                  {" "}
                  CONTACT{" "}
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
