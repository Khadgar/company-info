import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Row} from "reactstrap";
import BodyItem from "./BodyItem.js";

class ShapesAndFlavors extends Component {
    constructor(props) {
        super(props);
        // console.log("Ingedients props", props);
        this.content = props.Content.shapesandflavors;
    }

    generateContent(content) {
        return content.map((el, index) => {
            return (
                <Row className="shapesandflavorsWrapper" key={index}>
                    <BodyItem content={el} />
                </Row>
            );
        });
    }
    
    render() {
        return (
            <div className="shapesandflavorsWrapper container-fluid">
                {this.generateContent(this.content)}
            </div>
        );
    }
}
export default ShapesAndFlavors;
