import React, {Component} from "react";
import ReactDOM from "react-dom";

import {Row} from "reactstrap";
import BodyItem from "./BodyItem.js";
import Gallery from "./Gallery.js";

class Body extends Component {
    constructor(props) {
        super(props);
        // console.log("Body props", props);
        this.content = props.Content.home;
        this.galleryContent = props.Content.gallery
    }

    generateContent(content) {
        return content.map((el, index) => {
            return (
                <Row className="bodyWrapper" key={index}>
                    <BodyItem content={el} />
                </Row>
            );
        });
    }

    render() {
        // console.log("Body-render");
        return (
            <div className="bodyWrapper container-fluid">
                <Gallery content = {this.galleryContent} />
                {this.generateContent(this.content)}
            </div>
        );
    }
}
export default Body;
