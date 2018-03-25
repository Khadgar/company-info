import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

//use it for the events
import {Link} from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerWrapper">
                <Navbar color="dark" dark expand="sm" fixed="top">
                    <NavbarBrand href="/">Budapastry</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link
                                onClick={this.scrollToTop}
                                className="nav-link"
                                to="/"
                            >
                                About the Chimney Cakes
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/ingredients">
                                Ingredients
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/artofmaking">
                                The Art of Making
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/shapesandflavors">
                                Shapes and flavors
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/events">
                                Find Us
                            </Link>
                        </NavItem>
                        
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default Header;
