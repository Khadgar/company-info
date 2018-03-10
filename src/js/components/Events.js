import React, {Component} from "react";
import ReactDOM from "react-dom";

import EventItem from "./EventItem.js";
import {Row, Col} from "reactstrap";

class Events extends Component {
    constructor(props) {
        super(props);
        console.log("Events props", props);
        this.content = props.Content.events;
    }

    generateContent(content) {
        return content.map((el, index) => {
            return (
                <Col key={index}>
                    <EventItem content={el} />
                </Col>
            );
        });
    }

    render() {
        return (
            <div className="eventsWrapper container">
                <div className="eventsWrapper-eventContent row">
                    <Row>
                        {this.generateContent(this.content)}
                    </Row>
                </div>
            </div>
        );
    }
}
export default Events;
