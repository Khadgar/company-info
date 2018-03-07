import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

//use it for the events
import {Link} from "react-router-dom";

import {goToTop} from "react-scrollable-anchor";

class Header extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        goToTop();
        console.log("scroll to top");
    }

    render() {
        return (
            <div className="headerWrapper">
                <Navbar color="dark" dark expand="sm" fixed="top">
                    <NavbarBrand href="/">CompanyName</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link
                                onClick={this.scrollToTop}
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/events">
                                Events
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/ingredients">
                                Ingredients
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default Header;
