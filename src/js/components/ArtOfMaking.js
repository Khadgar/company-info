import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Row} from "reactstrap";
import BodyItem from "./BodyItem.js";

class ArtOfMaking extends Component {
    constructor(props) {
        super(props);
        // console.log("Ingedients props", props);
        // console.log(props);
        this.content = props.Content.artofmaking;
    }

    generateContent(content) {
        return content.map((el, index) => {
            return (
                <Row className="artofmakingWrapper" key={index}>
                    <BodyItem content={el} />
                </Row>
            );
        });
    }
    
    render() {
        return (
            <div className="artofmakingWrapper container-fluid">
                {this.generateContent(this.content)}
            </div>
        );
    }
}
export default ArtOfMaking;
