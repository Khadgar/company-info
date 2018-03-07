import React, {Component} from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footerWrapper">
                <footer className="footerWrapper-footer fixed-bottom">
                    <div className="container-fluid">
                        © 2018 Copyright:{" "}
                        <a href="https://mdbootstrap.com/material-design-for-bootstrap/">
                            {" "}
                            company.com
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
