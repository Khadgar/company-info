import React, {Component} from "react";
import ReactDOM from "react-dom";
import ScrollableAnchor, {
    configureAnchors,
    goToTop
} from "react-scrollable-anchor";

import {Row} from "reactstrap";
import BodyItem from "./BodyItem.js";

class Body extends Component {
    constructor(props) {
        super(props);
        console.log("Body props", props);
        configureAnchors({
            offset: -56,
            scrollDuration: 400
        });
        this.content = props.Content.home;
    }

    generateContent(content) {
        return content.map((el, index) => {
            return (
                <Row className="bodyWrapper container" key={index}>
                    <BodyItem content={el} />
                </Row>
            );
        });
    }

    render() {
        console.log("Body-render");
        return (
            <div className="bodyWrapper container">
                {this.generateContent(this.content)}
            </div>
        );
    }
}
export default Body;
