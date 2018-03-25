import React, {Component} from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footerWrapper">
                <footer className="footerWrapper-footer fixed-bottom">
                    <p className="footerWrapper-footer-phone lead">
                        Contact: 1-425-529-4299 / 1-425-598-5630
                    </p>
                    <p className="footerWrapper-footer-email lead">
                        <a href="mailto:budapastry@gmail.com" target="_top">
                            budapastry@gmail.com
                        </a>
                    </p>
                    <div className="footerWrapper-footer-social">
                        <a className="btn-floating btn-sm btn-fb mx-1" target="_blank" href="http://www.facebook.com">
                            <i className="fa fa-facebook"> </i>
                        </a>
                        <a className="btn-floating btn-sm btn-fb mx-1" target="_blank" href="http://www.twitter.com">
                            <i className="fa fa-twitter" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
