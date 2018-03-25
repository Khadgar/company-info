import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Content from "../../content/content.json";

class ApplicationWrapper extends Component {
    constructor() {
        super();
        this.state = {
            content: undefined
        };
    }

    componentDidMount() {
        // console.log("ApplicationWrapper-componentDidMount");
        this._isMounted = true;
        // fetch("http://api.chew.pro/trbmb")
        //     .then(response => response.json())
        //     .then(json => {
        //         if (this._isMounted) {
        //             setTimeout(() => {
        //                 this.setState({
        //                     content: Content
        //                 });
        //             }, 500);
        //         }
        //     });

        setTimeout(() => {
            if (this._isMounted) {
                this.setState({
                    content: Content
                });
            }
        }, 500);
    }

    componentWillUnmount() {
        // console.log("ApplicationWrapper-componentWillUnmount");
        this._isMounted = false;
    }

    render() {
        // console.log("ApplicationWrapper-render", this.state);
        const Content = this.state.content;
        return (
            <div className="applicationWrapper container-fluid">
                <Header />
                {Content ? (
                    <Main content={Content} />
                ) : (
                    <div className="loading">
                        <div className="loading-bar" />
                        <div className="loading-bar" />
                        <div className="loading-bar" />
                        <div className="loading-bar" />
                    </div>
                )}
                <Footer />
            </div>
        );
    }
}
export default ApplicationWrapper;
